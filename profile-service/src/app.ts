import express from "express";
import { configServer, startServer } from "./framework/webserver/server";
import { route } from "./framework/webserver/route/route"; 
import { connectDb } from './framework/database/connection'
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json())
app.use(express.urlencoded())
route(app)
connectDb()
configServer(app);
startServer(app, 3000)
