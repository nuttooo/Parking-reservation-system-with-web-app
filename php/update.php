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

// Perform SQL query to update IR data in database
$sql = "UPDATE ir_data SET ir_value = '$irData'";

if ($conn->query($sql) === TRUE) {
  echo "IR data updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
