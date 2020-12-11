
<!--file: ContactUsProcessForm.php-->
<!--author: Neil Hunter-->
<!--date: 08/12/2020-->
<!--desc: Create the contact us form processing-->


<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "jobSearchUK";
$conn = "";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//    echo "Connected successfully <br />";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$query = $conn->prepare(
    "INSERT INTO contacts (forename, surname, email, message)
    VALUES (?, ?, ?, ?)"
);

$query->bindParam(1, $forename);
$query->bindParam(2, $surname);
$query->bindParam(3, $email);
$query->bindParam(4, $message);

$forename = $_POST['forename'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$message = $_POST['message'];

$query->execute();
$conn = null;

echo <<<EOL

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Us Confirmation</title>
    <link rel="stylesheet" href="../../Styles/MyCSS.css">

</head>
<body>

<div class="img">

<main>
    <h2>Thank you, $forename $surname.</h2>
    <br>
    <p>The following message has been received:</p>
    <br>
    <p id="confirm-message">$message</p>
    <br>
    <p id="confirm-note">Thank you for your message, we will get back to you asap :)</p>
</main>

</div>

<div class="navbar">

    <a href="Index.html">Home</a>
    <a href="Job%20Search.html">Job Search</a>
    <a href="UniFunding.html">Universities and Funding</a>
    <a href="ContactUs.html">Contact Us</a>

</div>

</body>
</html>
EOL;
