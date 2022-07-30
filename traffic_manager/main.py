#app imports
import json
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL 

#app config
app=Flask(__name__)

#DB config 
app.config['MYSQL_HOST'] = ''
app.config['MYSQL_USER'] = ''
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = ''
  
  #SAMPLE MYSQL QUERY SNIPPET
#    cursor = mysql.connection.cursor()
        # cursor.execute(''' INSERT INTO info_table VALUES(%s,%s)''',(name,age))
        # mysql.connection.commit()

#API endpoints
@app.route('/')
def index():
    return jsonify('hello world')
  
@app.route('/hello')
def hello():
   name= request.get_json()
   data=name.get('name')
   return jsonify(data),200

#app run config
app.run(host='localhost', port= 5000)
