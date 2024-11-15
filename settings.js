require('dotenv').config();
const express = require('express');

//_______________________ ┏  Info  ┓ _______________________\\
const creator = 'Fanz';  // Nama Creator
port = 8080 //port host
//const port = process.env.PORT || 8080;  // Port untuk menjalankan server (default: 8080)
const LimitApikey = 200;  // Limit Apikey default

//_______________________ ┏  Loghandler  ┓ _______________________\\
const loghandler = {
    error: {
        status: false,
        code: 503,
        message: '[!] Service Unavailable Or Error',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    noturl: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, Invalid URL',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    notfound: {
        status: false,
        code: 404,
        message: '[!] Not Found',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    notid: {
        status: false,
        code: 404,
        message: '[!] Invalid ID or Zone',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    redy: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, Alias already in use',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    emoji: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, Emoji not Found',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    instgram: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, Username tidak wujud atau account private',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    register: {
        status: false,
        code: 403,
        message: '[!] Please Register First',
        maintanied_by: `${creator}`  // Menggunakan template literal
    },
    verify: {
        status: false,
        code: 403,
        message: '[!] Please Verify Email',
        maintanied_by: `${creator}`  // Menggunakan template literal
    }
}

// Set up Express server
const app = express();

// Middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route untuk tes server
app.get('/', (req, res) => {
    res.send('Hello World! Server is running...');
});

// Route untuk mendapatkan Limit API Key
app.get('/apikey-limit', (req, res) => {
    res.json({ limit: LimitApikey });
});

// Route untuk error handler (Contoh penanganan error)
app.use((req, res, next) => {
    res.status(404).json(loghandler.notfound);  // Menampilkan error not found jika route tidak ada
});

// Jalankan server pada port yang ditentukan
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
