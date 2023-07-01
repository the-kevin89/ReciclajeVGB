<?php
$servername = "localhost";
$username = "root";
$password = "reciclaje2509";
$dbname = "reciclaje";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

$nombreUsuario = $_POST['nombre_usuario'];
$contraseña = $_POST['contraseña'];

$sql = "SELECT * FROM usuarios WHERE nombre = '$nombre' AND contraseña = '$contraseña'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Inicio de sesión exitoso.";
} else {
    echo "Credenciales inválidas. Inténtelo de nuevo.";
}

// Cerrar la conexión
$conn->close();
?>
