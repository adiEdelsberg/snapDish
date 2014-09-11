<?php
	include_once('db_connect/connect.php');
	
	/*
		$sql = mysql_query("select * from `customer`") or die(mysql_error());
		while($row = mysql_fetch_array($sql)){
		echo $row['first_name'].'</br>';
		}
	*/
	
	$query = "SELECT * FROM customer";
	$result = $odb->query($query);
	if($result->rowCount()>0){
		foreach($result as $item){
			echo ($item['first_name'].'</br>');
		}
	}
	
?>