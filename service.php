<html>
<head>
    <script src="lib/pouchdb-2.2.2.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="lib/setimmediate.js" type="text/javascript"></script>
    <script src="lib/promise.js" type="text/javascript"></script>
</head>
<body>
<script type="text/javascript" charset="utf-8">

    // data types mapping (default to string)
    var types = {
        molfile: 'mol2d'
    };

    // docIDs for service views, indexed by service name
    var views = {
        'all-predictions': './predictor_all/',
        'nmr-1h-prediction': './new_predictor/',
        'cosy-prediction': './cosy/',
        'hmbc-prediction': './hmbc/',
        'nmr-13c-prediction': './13c/'
    };

    // Creating data object
    var data = {};
    try {
        <?php foreach($_POST as $key=>$postvar): ?>
        try {
            data["<?php echo $key ?>"] = JSON.parse(<?php echo json_encode($postvar) ?>);
        } catch(e) {
            data["<?php echo $key ?>"] = <?php echo json_encode($postvar) ?>;
        }
        <?php endforeach; ?>
    } catch(e) {
        console.log("Something went wrong");
    }

    try {
        <?php foreach($_GET as $key=>$postvar): ?>
        try {
            data["<?php echo $key ?>"] = JSON.parse(<?php echo json_encode($postvar) ?>);
        } catch(e) {
            data["<?php echo $key ?>"] = <?php echo json_encode($postvar) ?>;
        }
        <?php endforeach; ?>
    } catch(e) {
        alert("Something went wrong");
    }


    var service = data.name;
    delete data.name;

    if(!service || typeof service !== "string" || !views[service]) {
        writeBody('Error: '+service+' service does not exist');
    } else {
        try{
            if(window.localStorage) {
                window.localStorage.setItem('external_infos', JSON.stringify(data));
            }
            writeBody('Document written to database. Redirecting...');
            setTimeout(function() {
                window.location = views[service];
            }, 300);    
        }
        catch(err) {
            writeBody('Error writing to local storage... We will redirect you anyway');
            setTimeout(function() {
                window.location = views[service];
            }, 1000);
        }
    }

    function writeBody(text) {
        var body = document.getElementsByTagName('body');
        body[0].innerHTML += text;
    }

</script>
</body>
</html>
