const http = require('http');

const server = http.createServer((req, res) => {
    //data object literal
    const data = {
        Nama: 'Jihad',
        Kelas: 'TI25A',
        Matakuliah: 'Pemrograman berbasis platform'
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});

server.listen(8000, () => {
    console.log('Server berjalan di http://localhost:8000');
});
