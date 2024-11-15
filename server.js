require("./settings");  // Memuat pengaturan dari file settings.js
const http = require("http");
const app = require("./index");

// Ganti baris ini dengan kode yang benar
const port = process.env.PORT || 8080;  // Menggunakan PORT dari .env atau default ke 8080 jika tidak ada

// Membuat server HTTP dan menjalankannya pada port yang telah didefinisikan
http.createServer(app).listen(port, () => {
    console.log(`
        █████╗ ██╗     ██████╗ ██╗███████╗
       ██╔══██╗██║     ██╔══██╗██║██╔════╝
       ███████║██║     ██████╔╝██║███████╗
       ██╔══██║██║     ██╔═══╝ ██║╚════██║
       ██║  ██║███████╗██║     ██║███████║
       ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝ V2 
			                          @alipje29
								 
Server running on http://localhost:` + port);
    console.log(`Hello ${creator}`);
});
