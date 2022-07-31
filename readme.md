[FOR DEVS ]  
Recondigured backend to run with flask  
install flask,flask-marshmallow, flask_mysqldb, flask_cors using pip3 if needed  
app configured to run on port 5000  
basic database connection code added (to be updated once actual db is made)  
run cmd:   
python main.py  

For the requests to work, create table 'commits' in mySQL with exactly these columns:
repno (varchar), dlno(varchar), offenceid(varchar), time(date), location(varchar), paid(boolean)
  
Also update the mySQL password and database in the file 'main.py'  