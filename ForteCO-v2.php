<html>
<head>
	<link href="ForteCOStyles.css" rel="stylesheet">
</head>
<!--
Forte Checkout Integration Guide:   http://www.forte.net/devdocs/a_checkout/co_product_overview.htm
Forte Checkout Workbench:           https://sandbox.forte.net/checkout/workbench/
Using Webhooks:                     http://www.forte.net/devdocs/reference/webhooks.htm
Sample Code:                        https://bitbucket.org/fortepayments/
Transaction Response Codes:         https://www.forte.net/devdocs/reference/response_codes.htm
Frequently Asked Questions:         https://www.forte.net/devdocs/reference/faq.htm
Forte Technical Support:
			7:00 am - 7:00 pm CST
			866.290.5400 option 5
			integration@forte.net				
-->
<?php
	$API_access_id  = '27280ab0163dd5a8a7bf267176926561';
	$API_secure_key = '82894ce3ae813620b7090791a2385495';
	$totalamount = "3.00";
	$location_id = '232675';
	$method = 'sale';
	$version = '2.0';
	$ordernumber = '656984';
	date_default_timezone_set("America/Chicago");
	$unixtime = strtotime(gmdate('Y-m-d H:i:s'));
	$millitime = microtime(true) * 1000;
	$utc = number_format(($millitime * 10000) + 621355968000000000 , 0, '.', '');
	$data = "$API_access_id|$method|$version|$totalamount|$utc|$ordernumber||";
	$hash = hash_hmac('md5',$data,$API_secure_key);
?>
<head>

<!--script type="text/javascript" src="https://checkout.forte.net/v2/js"></script -->     <!-- production -->
<script type="text/javascript" src="https://sandbox.forte.net/checkout/v2/js"></script>    <!-- sandbox -->
<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>

<script>
	function oncallback(e) {
        var formatted_json = JSON.stringify(JSON.parse(e.data), null, 2);
        $('#message').html(formatted_json);
		var response = JSON.parse(e.data);
		switch (response.event) {
			case 'begin':
			break;
			case 'success':
				alert('Thanks for your payment.' + "\n\n" + 'The trace number is:' + "\n" + response.trace_number);
			break;
			case 'failure':
				alert('Sorry, the transaction failed.' + "\n\n" + 'The failed reason is ' + response.response_description);
		}
	}
</script>
</head>
<body>
<pre style="margin-left:50px;" id="message"></pre>
	<center>
	<button api_access_id=<?php echo $API_access_id;?>
		location_id=<?php echo $location_id;?>
		version_number=<?php echo $version;?>
		callback="oncallback"
		save_token="true"
		method=<?php echo $method;?>
		total_amount="<?php echo $totalamount;?>"
		utc_time=<?php echo $utc;?>
		signature=<?php echo $hash;?>		
		order_number=<?php echo $ordernumber;?>
		schedule_start_date="04/26/2019"
		schedule_frequency="weekly"
		schedule_quantity="3"
		>Pay now</button>
</body>
</html>