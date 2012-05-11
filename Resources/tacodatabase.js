/**
 * @author Shayne Beckstrand
 */
function initialize_database(user_name){
	
	user_name = typeof(user_name) != 'undefined';
	var db = Titanium.Database.open('highschoolapp');
	db.execute('CREATE TABLE IF NOT EXISTS restaurants (id int, name varchar(255))');
	
Titanium.API.debug("Did we get here?");
	
}


function initialize_mealbase(){
	var db = Titanium.Database.open('dinnerbell');
	db.execute('CREATE TABLE IF NOT EXISTS meal (id int auto_increment, title varchar(255), date varchar(255))');
	 // TODO: Add facebook, twitter, email information to database
	db.close();
}


function insertMeal(title, date){
	var db = Titanium.Database.open('highschoolapp');
	db.execute('INSERT INTO meal (title, date) VALUES(?,?)',title, date);
	// TODO: may need to deal with possible exception if error writing to database
}


function insertLocation(name, mobile){
	//Titanium.API.debug(mobile[/0]);
	var params = {  
	                 name: name,
	                 mobile: mobile,
	                 req: 'makelocation'  
	    };
	var request = Ti.Network.createHTTPClient(); 
	request.open("POST","http://caseyisom.com/database.php");
	request.send(params);
	request.onload = function(){
		var db = Titanium.Database.open('highschoolapp');
		db.execute('INSERT INTO location (name, mobile, id) VALUES(?,?,?)',name, mobile[0], this.responseText);
		// TODO: may need to deal with possible exception if error writing to database
		db.close();
	}
}

function deleteLocation(name, id){
	Titanium.API.debug("Did we get the id? " + id);
	var params = {  
	             name: name,
	             id: id,
	             req: 'dellocation'  
	};
	var request = Ti.Network.createHTTPClient(); 
	request.open("POST","http://caseyisom.com/database.php");
	request.send(params);
	
	request.onload = function(){
		Titanium.API.debug("Did we get the id? " + id);
		var db = Titanium.Database.open('highschoolapp');
		db.execute('DELETE FROM location WHERE id= ?', id);
		db.close();
	}
}

function getLocation(){
	var db = Titanium.Database.open('highschoolapp');
	var rows = db.execute('SELECT * FROM location');
	//Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
	location = [];
	count = 0;
	while (rows.isValidRow())
	{
		//Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
		location[count] = [rows.fieldByName('name'),rows.fieldByName('mobile')];
		count=count+1;

		rows.next();
	}
	rows.close();
	db.close();
	return location;
	
}
/*
var updateName = 'I was updated';
var updateId = 4;
db.execute('UPDATE DATABASETEST SET NAME = ? WHERE ID = ?', updateName, updateId);

db.execute('UPDATE DATABASETEST SET NAME = "I was updated too" WHERE ID = 2');

db.execute('DELETE FROM DATABASETEST WHERE ID = ?',1);

Titanium.API.info('JUST INSERTED, rowsAffected = ' + db.rowsAffected);
Titanium.API.info('JUST INSERTED, lastInsertRowId = ' + db.lastInsertRowId);

var rows = db.execute('SELECT * FROM DATABASETEST');
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());
Titanium.API.info('ROW COUNT = ' + rows.getRowCount());

while (rows.isValidRow())
{
	Titanium.API.info('ID: ' + rows.field(0) + ' NAME: ' + rows.fieldByName('name') + ' COLUMN NAME ' + rows.fieldName(0));
	if (rows.field(0)==5)
	{
		l3.text = rows.fieldByName('name');
	}

	rows.next();
}
rows.close();*/


 // close db when you're done to save resources
 
