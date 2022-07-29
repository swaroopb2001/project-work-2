#app imports
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL 


#app config
app=Flask(__name__)

#DB config 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'your_password'
app.config['MYSQL_DB'] = 'your_database'
  
  #SAMPLE MYSQL QUERY SNIPPET
#    cursor = mysql.connection.cursor()
        # cursor.execute(''' INSERT INTO info_table VALUES(%s,%s)''',(name,age))
        # mysql.connection.commit()

mysql = MySQL(app)

#API endpoints
@app.route('/')
def index():
    return jsonify('hello world')

@app.route('/offences/insert/<id>/<type>/<fine>')
def offIns(id, type, fine):
    cursor = mysql.connection.cursor()
    cursor.execute(''' INSERT INTO offences VALUES(%s,%s,%s)''',(id,type,fine))
    mysql.connection.commit()
    return jsonify("Inserted!")

@app.route('/offences/all')
def offences():
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT * FROM offences''')
    details = cursor.fetchall()
    return jsonify(details)

@app.route('/offences/del/<id>')
def offDel(id):
    cursor = mysql.connection.cursor()
    cursor.execute(''' DELETE FROM offences WHERE offenceid=%s''',(id))
    mysql.connection.commit()
    return jsonify("Deleted!")

#app run config
app.run(host='localhost', port= 5000)
