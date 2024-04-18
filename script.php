<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get IR data from Arduino
$irData = $_GET['ir_data'];

// Perform SQL query to insert IR data into database
$sql = "INSERT INTO ir_data (ir_value) VALUES ('$irData')";

if ($conn->query($sql) === TRUE) {
  echo "IR data inserted successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
