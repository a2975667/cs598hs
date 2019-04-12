import json
from os import listdir
from os.path import isfile, join
import sys
from pprint import pprint
import xlwt 
from xlwt import Workbook 


def read_json(filename):
    f = open(filename, 'r').readlines()
    data = [json.loads(line) for line in f]
    return data

def get_json_files(directory):
    only_json_files = [f for f in listdir(directory) if isfile(join(directory, f)) and f[-4:]=='json']
    return only_json_files

def dump_json(sheet, raw_data):
    flag_head = False
    flag_qv = True
    for row, data in enumerate(raw_data):
        if not flag_head:
            headers = [r for r in data['results']]
            sheet.write(0,0,'userId')
            for idx, header in enumerate(headers):
                try:
                    sheet.write(0, idx+1, header)
                
                    if isinstance(data['results'][header],dict):
                        #pprint(data['results'][header])
                        out_header = [x for x in data['results'][header]]
                        out_header.sort()
                        sheet.write(1, idx+1, str(out_header).replace('[','').replace(']',''))

                    flag_qv = False
                except:
                    sheet.write(0, idx+1, header['name'])
                    sheet.write(1, idx+1, '')
                    flag_qv = True
            flag_head=True

        # Start writing results
        sheet.write(row+2,0,data['userid'])
        #if the result is in qv format
        if flag_qv:
            for column, value in enumerate(data['results']):
                sheet.write(row+2, column+1, value['value'])
            pass
        else:
            for column, value in enumerate(data['results']):
                if isinstance(data['results'][value],dict):
                    out_header = [x for x in data['results'][value]]
                    out_header.sort()
                    out = str([int(data['results'][value][x]) for x in out_header])
                    out = out.replace('[','').replace(']','')
                    sheet.write(row+2, column+1, str(out))
                else:
                    sheet.write(row+2, column+1, str(data['results'][value]))
            pass
            
        
    return sheet


if __name__ == "__main__":
    analysis_path = sys.argv[1]
    all_json_files = get_json_files(analysis_path)

    wb = Workbook()

    for json_file in all_json_files:
        file_name = analysis_path + '/' + json_file
        raw_data = read_json(file_name)
        print("Processing:  ", json_file)
        if "results" not in raw_data[0]:
            print("summary: ")
            #pprint(raw_data)
            continue
        if raw_data[0]['form'] == 'likert':
            sheetname = json_file.replace('.json','').replace('result_','')
        else:
            sheetname = raw_data[0]['form']

        sheet = wb.add_sheet(sheetname)
        sheet = dump_json(sheet,raw_data) 
  
    wb.save('results.xls') 
    
        
