<?php
	
	/*
	$link = mysql_connect("localhost","root","r9M4#56Maj7@h","testdb") or die(mysql_error()); 
	mysql_select_db("testdb") or die(mysql_error());
	*/
	
	$host = "localhost";
	$user = "root";
	$database = "testdb";
	$password = "r9M4#56Maj7@h";
	
	$odb = new PDO("mysql:host=".$host.";dbname=".$database, $user, $password);
?>