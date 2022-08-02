#app imports

import json
import math
import random

from flask import Flask, request, jsonify
from flask_mysqldb import MySQL 
from flask_cors import CORS, cross_origin


#app config
app=Flask(__name__)
CORS(app, support_credentials=True)

#DB config 
app.config['MYSQL_HOST'] = 'database-2.c8hjebd9wtea.ap-south-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'Admin123'
app.config['MYSQL_DB'] = 'traffic_manager' 
  


mysql = MySQL(app)

#API endpoints
@app.route('/')
def index():
    return jsonify('hello world')
  
@app.route('/hello')
def hello():
   name= request.get_json()
   data=name.get('name')
   return jsonify(data),200



@app.route('/offences/new/',methods=["POST"])
@cross_origin(supports_credentials=True)
def offIns():
    data=request.get_json()
    repno=data.get('repno')
    dlno=data.get('dlno')
    offenceid=data.get('offenceid')
    location=data.get('location')
    time=data.get('time')
    paid=data.get('paid')
    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO commits VALUES(%s,%s,%s,%s,%s,%s)''',(repno,dlno,offenceid,time,location,paid))
    mysql.connection.commit()
    return jsonify("success"), 200

@app.route('/offences/all', methods=['GET'])
def offences():
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT d.dlno, d._name, o._type, c._time, c.location, o.fine, c.paid, c.repno FROM driver d, commits c, offences o where d.dlno=c.dlno and o.offenceid=c.offenceid''')
    details = cursor.fetchall()
    return jsonify(details),200
    

@app.route('/offences/del/<repno>')
def offDel(repno):
    cursor = mysql.connection.cursor()
    cursor.execute(''' DELETE FROM commits WHERE repno=%s''',[repno])
    mysql.connection.commit()
    return jsonify("Deleted!")


  
@app.route('/offences/search/<dlno>')
def searchDlno(dlno):
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT d.dlno, d._name, o._type, c._time, c.location, o.fine, c.paid, c.repno FROM driver d, commits c, offences o WHERE d.dlno=c.dlno and o.offenceid=c.offenceid and d.dlno=%s''',[dlno])
    details = cursor.fetchall()
    return jsonify(details)

@app.route('/offences/getOffenceID/<type>')
def getOffenceID(type):
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT offenceid FROM offences WHERE _type=%s''',[type])
    details = cursor.fetchall()
    return jsonify(details)

#app run config
app.run(host='localhost', port= 5000)
