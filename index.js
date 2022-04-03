import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";

import { createRequire } from 'module'
dotenv.config();

import https from "https";
import fs from "fs"; 
//https = require('https');
//const fs = require('fs');
//const express = require('express');

const app = express();

const options = {
    key: fs.readFileSync('/home/mglcoin_tld.key'), // Replace with the path to your key
    cert: fs.readFileSync('/home/STAR_mglcoin_io.crt') // Replace with the path to your certificate
}




try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}


//app.use((req, res, next) => {
//    res.send('<h1>HTTPS Works!</h1>');
//});

app.use(cors({ credentials:true, origin:'https://vip.mglcoin.io' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const port = 5000;

https.createServer(options, app).listen(port,() => {
    console.log('Server listening on port ' + port);
});

