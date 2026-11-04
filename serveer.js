const http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
const mhs = {
    Nama: 'Mahasiswa',
    Kelas: 'TI25A',
    Matakuliah: 'Pemrograman JavaScript'
};

res.writeHead(200);
    if(req.url === '/'){
        res.write('<html><body><h2> Selamat Datang di Halaman Utama Web Server TI25A!</h2></body></html>');
    }
    else if(req.url === '/mahasiswa'){
        res.write('<html><body><h2> Selamat Datang di Halaman Data Mahasiswa!</h2></body></html>');
    }
    else if(req.url === '/dosen'){
        res.write('<html><body><h2> Selamat Datang di Halaman Data Dosen!</h2></body></html>');
    }
    else if(req.url === '/admin'){
        res.write('<html><body><h2> Ini adalah halaman Utama Admin!</h2></body></html>');
    }
    else{
        res.write('<html><body><h2> Page Not Found! (404)</h2></body></html>');
    }
});