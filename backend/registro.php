<?php
$servername = "localhost";
$username = "root";
$password = "reciclaje2509";
$dbname = "reciclaje";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

$nombre = $_POST['nombre_usuario'];
$correo = $_POST['gmail'];
$contraseña = $_POST['contraseña'];

$sql = "SELECT * FROM personas WHERE nombre = '$nombre'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "El nombre de usuario ya existe. Por favor, elija otro.";
    exit();
}

$sql = "INSERT INTO personas (nombre, gmail, contraseña) VALUES ('$nombre', '$correo', '$contraseña')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso.";
} else {
    echo "Error al registrar el usuario: " . $conn->error;
}

$conn->close();
?>