#app imports
import json
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL 


#app config
app=Flask(__name__)

#DB config 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root123'
app.config['MYSQL_DB'] = 'demo'
  
  #SAMPLE MYSQL QUERY SNIPPET
#    cursor = mysql.connection.cursor()
        # cursor.execute(''' INSERT INTO info_table VALUES(%s,%s)''',(name,age))
        # mysql.connection.commit()

mysql = MySQL(app)

#API endpoints
@app.route('/')
def index():
    return jsonify('hello world')

@app.route('/offences/new')
def offIns():
    data=request.get_json()
    dlno=data.get('dlno')
    name=data.get('name')
    location=data.get('location')
    Type=data.get('type')
    fine=data.get('fine')
    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO offences VALUES(%s,%s,%s,%s,%s)''',(dlno,name,location,Type,fine))
    mysql.connection.commit()
    return jsonify("success"), 200

@app.route('/offences/all')
def offences():
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT * FROM offences''')
    details = cursor.fetchall()
    return jsonify(details),200
    

@app.route('/offences/del/<id>')
def offDel(id):
    cursor = mysql.connection.cursor()
    cursor.execute(''' DELETE FROM offences WHERE offenceid=%s''',(id))
    mysql.connection.commit()
    return jsonify("Deleted!")

@app.route('/all')
def all():
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT * FROM demotable''')
    details = cursor.fetchall()
    cursor.close()
    
        

    return jsonify(details)
  



#app run config
app.run(host='localhost', port= 5000)
