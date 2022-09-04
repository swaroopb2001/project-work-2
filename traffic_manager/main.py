#app imports



from datetime import datetime
from functools import wraps
import json
from lib2to3.pgen2 import token
import jwt
import datetime

from flask import Flask, request, jsonify
from flask_mysqldb import MySQL 
from flask_cors import CORS, cross_origin



#app config
app=Flask(__name__)
CORS(app, support_credentials=True)
app.config['SECRET_KEY']='JWTAuthKey'

#DB config 
app.config['MYSQL_HOST'] = 'database-2.c8hjebd9wtea.ap-south-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'Admin123'
app.config['MYSQL_DB'] = 'TrafficDb' 
  


mysql = MySQL(app)


        


#API endpoints
@app.route('/')
def index():
    return jsonify('hello world')

@app.route('/login',methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data=request.get_json()
    
    username=data.get('username')
    password=data.get('password')
    
    if not username or not password:
        return jsonify({'message':'invalid credentials'}),403
    if password=='admin123' and username=='admin':
        token=jwt.encode({'user':'admin','exp':datetime.datetime.utcnow()+datetime.timedelta(days=30)}, app.config['SECRET_KEY'])
        return jsonify({'user':'admin','token': token}),200
    else:
        return jsonify({'message':'invalid credentials'}),403
    
@app.route('/offences/all')
def all():
    try:
        cursor = mysql.connection.cursor()
        #get from view ?
        cursor.execute(''' SELECT d.dlno, d._name, o._type, o._time, o.location, o.fine, o.paid, c.offenceid FROM driver d, commits c, offences o where d.dlno=c.dlno and o.offenceid=c.offenceid''')
        details = cursor.fetchall()
        return jsonify(details),200
    except:
        return jsonify({'error':'database error'}),500
    
@app.route('/isloggedin', methods=['POST'])
def isauth():
    data=request.get_json()
    token= data.get('token')
    if token:
        return jsonify({'success':True,'data':'admin'}),200
    else:
        return jsonify({'success':False}),403
    


#app run config
app.run(host='localhost', port= 5000)
