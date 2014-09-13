<?php

	if(isset($_POST['rgb'])){
		$rgb = $_POST['rgb'];
	}

	$ch = curl_init("http://guitarscream.com/test/test/serverToServer/server/setColor.php");
	$prm = "&rgb=$rgb";
	curl_setopt($ch, CURLOPT_POSTFIELDS, $prm);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	
	echo curl_exec($ch); 
?> 