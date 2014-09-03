<?
	$molfile=$_REQUEST["molfile"];
	$scriptURL="http://script.epfl.ch/script/Service/20140724/WzIA1568BD";
	
	$data = array(
		'molfile' => $molfile
	);

	$context = stream_context_create(array('http' => array(
		'method' => 'POST',
		'header' => 'Content-Type: application/x-www-form-urlencoded',
		'content' => http_build_query($data)
		))
	);

	$output = file_get_contents($scriptURL, false, $context);


	print $output;



?>
