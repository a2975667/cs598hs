from app import app, mongo
from flask import request, jsonify, url_for, session
from flask import render_template, make_response
import json.decoder
import os
import uuid 


filename = os.path.join(app.static_folder, 'qv.json')
questions = open(filename, "r")
questions = json.load(questions)

@app.route('/')
@app.route('/welcome')
def welcome():
    userid = str(uuid.uuid4().hex[:15].upper())
    while mongo.db.users.find_one({"userid":userid}) is not None:
        userid = str(uuid.uuid4().hex[:15].upper())
    else:
        mongo.db.users.insert_one({"userid":userid})
        
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
    resp.set_cookie('UserId', '', expires=0)
    # TODO: remove uid without response in mlab.users
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

@app.route('/test', methods=['POST'])
def test():
    data = request
    print("hehe" + str(request.json))
    #print(request.get_json())
    #print(request)
    return str(data)

# @app.route('/user', methods=['GET', 'POST', 'DELETE', 'PATCH'])
# def user():
#     print(request)
#     if request.method == 'GET':
#         query = request.args
#         data = mongo.db.users.find_one(query)
#         return jsonify(data), 200

#     data = request.get_json()
#     print(data)
#     if request.method == 'POST':

#         if data.get('name', None) is not None and data.get('email', None) is not None:
#             print(data)
#             mongo.db.users.insert_one(data)
#             return jsonify({'ok': True, 'message': 'User created successfully!'}), 200
#         else:
#             return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

    # if request.method == 'DELETE':
    #     if data.get('email', None) is not None:
    #         db_response = mongo.db.users.delete_one({'email': data['email']})
    #         if db_response.deleted_count == 1:
    #             response = {'ok': True, 'message': 'record deleted'}
    #         else:
    #             response = {'ok': True, 'message': 'no record found'}
    #         return jsonify(response), 200
    #     else:
    #         return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

    # if request.method == 'PATCH':
    #     if data.get('query', {}) != {}:
    #         mongo.db.users.update_one(
    #             data['query'], {'$set': data.get('payload', {})})
    #         return jsonify({'ok': True, 'message': 'record updated'}), 200
    #     else:
    #         return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400