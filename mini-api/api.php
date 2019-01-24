<?php
// untuk mencegah error akibat CORS
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');  
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 

echo "SIMULASI KIRIM DATA FORM";

// menampilkan data yang dikirimkan dengan method post
// print_r($_POST);
header('Content-type: application/json');
echo json_encode($_POST, JSON_PRETTY_PRINT);
print_r($_FILES['cover']);