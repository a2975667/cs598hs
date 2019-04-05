from app import app, mongo
from flask import request, jsonify, url_for, session
from flask import render_template, make_response
import json.decoder
import os
import uuid 
from pprint import pprint


filename = os.path.join(app.static_folder, 'qv.json')
questions = open(filename, "r")
questions = json.load(questions)

@app.route('/')
@app.route('/welcome')
def welcome():
    userid = str(uuid.uuid4().hex[:15].upper())
    while mongo.db.users.find_one({"userid":userid}) is not None:
        userid = str(uuid.uuid4().hex[:15].upper())
    # else:
    #     mongo.db.users.insert_one({"userid":userid}) # move this to complete function
        
    resp = make_response(render_template('welcome.html', data={'form':''}))
    resp.set_cookie('UserId', userid)
    return resp

@app.route('/normal/<likertID>')
def demographic(likertID):
    question_js = str(likertID)+'.js'
    return render_template('likert.html', data=question_js)

@app.route('/complete')
def complete():
    resp = make_response(render_template('thankyou.html', data={}))
    # resp.set_cookie('UserId', '', expires=0)
    # TODO: move save to user here
    return resp


@app.route('/likert')
def likert():
    url_for('static', filename='likert.js')
    url_for('static', filename='likert.css')
    return render_template('likert.html')

@app.route('/qv/<qvid>')
def dv(qvid):
    print(qvid)
    filename='qv'+str(qvid)+'.js'
    url_for('static', filename=filename)
    url_for('static', filename='qv.css')
    url_for('static', filename='loading.gif')
    return render_template('qv.html', q_list = questions['questions'],filename=filename)


    #return "Hello, World!"
# @app.route('/hello')
# def student():
#    return render_template('student.html')

# @app.route('/result',methods = ['POST', 'GET'])
# def result():
#     if request.method == 'POST':
#         print(request.form)
#         result = request.form
#         return render_template("result.html",result = result)

@app.route('/api/welcome')
def api_index():
    return "API version 0.0.0"

@app.route('/api/likert')
def likert_list():
    return "List of questions"

@app.route('/api/likert/<likertID>')
def likert_ID(likertID):
    return str(likertID)

@app.route('/api/getScript')
def get_script():
    path = mongo.db.path.find().sort([("count", 1)]).limit(1)[0]
    print(path['path'])
    return jsonify({"path": path['path']})

@app.route('/api/updateScript', methods=['POST'])
def update_script():
    data = request.json
    mongo.db.path.update({'path': str(data['path'])}, {'$inc': {'count': 1}})
    mongo.db.users.insert_one({"userid":data['userid']})
    return jsonify({'ok': True}), 200

@app.route('/submit_qv1', methods=['POST'])
def submit_qv1():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "qv1",
        "results":data
    }
    mongo.db.result_qv1.insert_one(insert_data)
    return jsonify({'ok': True}), 200

@app.route('/submit_qv2', methods=['POST'])
def submit_qv2():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "qv2",
        "results":data
    }
    mongo.db.result_qv2.insert_one(insert_data)
    return jsonify({'ok': True}), 200

@app.route('/submit_qv3', methods=['POST'])
def submit_qv3():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "qv3",
        "results":data
    }
    mongo.db.result_qv3.insert_one(insert_data)
    return jsonify({'ok': True}), 200

@app.route('/submit_qv4', methods=['POST'])
def submit_qv4():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "qv4",
        "results":data
    }
    mongo.db.result_qv4.insert_one(insert_data)
    return jsonify({'ok': True}), 200

@app.route('/submit_likert', methods=['POST'])
def submit_likert():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "likert",
        "results":data
    }
    mongo.db.result_likert.insert_one(insert_data)
    return jsonify({'ok': True}), 200

@app.route('/submit_demographic', methods=['POST'])
def submit_demographic():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "likert",
        "results":data
    }
    mongo.db.result_demographic.insert_one(insert_data)
    return jsonify({'ok': True}), 200

@app.route('/submit_followup', methods=['POST'])
def submit_followup():
    data = request.json
    uid = request.cookies.get('UserId')
    insert_data = {
        "userid": uid,
        "form": "likert",
        "results":data
    }
    mongo.db.result_followup.insert_one(insert_data)
    return jsonify({'ok': True}), 200