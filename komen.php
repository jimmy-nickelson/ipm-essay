<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("fdb26.awardspace.net", "3399522_ipm", "ipm-essay765", "3399522_ipm");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$pengirim = $_POST['email'];
$isi = $_POST['textarea'];
// Attempt insert query execution
$sql = "INSERT INTO komentar SET email='$pengirim',komentar='$isi'";
if(mysqli_query($link, $sql)){
        $message = 'Pesan anda berhasil terkirim';
} else{
        $message = 'Maaf, kesalahan terjadi';
}

echo "<script type='text/javascript'>alert('$message');</script>";
//header("location:essay.html");
echo "<script type='text/javascript'>window.location = 'http://ipm-essay.atwebpages.com/essay.html';</script>";


// Close connection
mysqli_close($link);

// query SQL untuk insert data
//$query="INSERT INTO mahasiswa SET nim='$nim',nama='$nama',jurusan='$jurusan',jenis_kelamin='$jenis_kelamin',alamat='$alamat'";
//mysqli_query($koneksi, $query);

?>
