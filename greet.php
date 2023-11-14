<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    echo 'Hello, ' . htmlspecialchars($name) . '!';
} else {
    // If not a POST request, redirect to the homepage or display an error message
    header('Location: index.html');
    exit();
}
?>
