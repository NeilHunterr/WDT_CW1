<!--
file: ContactUsTableCreate.php
author: Neil Hunter
date: 08/12/2020
desc: Create the contacts table in the database
-->

<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "jobSearchUK";
$conn = "";

try {
    $conn = new PDO(
        "mysql:host=$servername;
        dbname=$dbname",
        $username,
        $password
    );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected established <br />";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$query = $conn->prepare(
    "CREATE TABLE contacts (id int(6) NOT NULL auto_increment,
    forename varchar(20) NOT NULL,
    surname varchar(20) NOT NULL,
    email varchar(30) NOT NULL,
    message varchar(1000) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE id (id),
    KEY id_2 (id))"
);

$query->execute();
$conn = null;

