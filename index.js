//_______________________ ┏  Info  ┓ _______________________\\
//
//   Credit : AlipBot
//
//   Note
//   Jangan Jual SC ini ,
//   Jangan Buang Text ini,
//   Siapa Mahu Upload Jangan Lupa Credit :),
//   Siapa Tidak Letak Credit Akan Ambil Tindakan
//
//_______________________ ┏ Make By AlipBot ┓ _______________________\\

require("dotenv").config();  // Menggunakan dotenv untuk konfigurasi
const express = require("express");
const app = express();
const favicon = require("serve-favicon");
const path = require("path");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const cors = require("cors");
const secure = require("ssl-express-www");

//_______________________ ┏  Main Config  ┓ _______________________\\
const creator = '乂𝘼𝙡𝙞𝙥乂';  // Nama Creator
const LimitApikey = 200;  // Default limit API key
const port = process.env.PORT || 8080;  // Port untuk menjalankan server

//_______________________ ┏ Funtion ┓ _______________________\\
async function resetapi() {
  console.log("RESET LIMIT DONE");
}

// Reset Request Today setiap hari
async function ResetRequestToday() {
  console.log("RESET Request Today DONE");
}

//_______________________ ┏ Code ┓ _______________________\\

// Setting untuk routing
var main = require("./routes/main"),
  api = require("./routes/api");

// Set up Express server
app.set("view engine", "html");  // Ganti render engine ke HTML
app.set("views", path.join(__dirname, "view"));  // Set lokasi folder views
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(express.static("public"));  // Static files seperti CSS dan JS

//_______________________ ┏  CronJob For Reset Limit  ┓ _______________________\\

// Reset Request Today Setiap Hari Pukul 00:00
cron.schedule(
  "0 0 0 * * *",
  () => {
    ResetRequestToday();
  },
  {
    scheduled: true,
    timezone: "Asia/Kuala_Lumpur",
  }
);

// Reset Limit API Key setiap Bulan
cron.schedule(
  "0 0 1 * *",
  () => {
    resetapi();
  },
  {
    scheduled: true,
    timezone: "Asia/Kuala_Lumpur",
  }
);

//_______________________ ┏  Middleware Setup  ┓ _______________________\\
app.use(cors());
app.use(secure);  // Redirect HTTP ke HTTPS
app.use(function (req, res, next) {
  res.locals.success_messages = req.flash("success_messages");
  res.locals.error_messages = req.flash("error_messages");
  res.locals.error = req.flash("error");
  next();
});

// Routing
app.use("/", main);
app.use("/", api);

// Error handling jika route tidak ditemukan
app.use(function (req, res, next) {
  next(createError(404));  // Route tidak ditemukan
});

// Menangani error 404
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, "view", "404.html"));  // Tampilkan file HTML 404
});

//_______________________ ┏ Make By AlipBot ┓ _______________________\\
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
