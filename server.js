const http = require('http');
const server = http.createServer((req, res) => {
    //data object literal
    const data = {
        Nama: 'Mahasiswa',
        Kelas: 'TI25A',
        Matakuliah: 'Pemrograman Javascript'
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});

server.listen(8000, () => {
    console.log('Server berjalan di http://localhost:8000');
});