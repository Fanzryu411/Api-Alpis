require("./settings");  // Memuat pengaturan dari file settings.js
const http = require("http");
const app = require("./index");

// Gunakan PORT yang disediakan oleh Heroku atau port default
const port = process.env.PORT || 8080;

const server = http.createServer(app);

// Menangani kesalahan port yang sudah digunakan
server.listen(port, () => {
    console.log(`
        Server running on http://localhost:${port}`);
});

// Tangani kesalahan 'EADDRINUSE' jika port sudah digunakan
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Trying a new port...`);
        server.listen(0);  // Menentukan port acak
    } else {
        console.error(err);
    }
});
