import express, { Application } from 'express'
import { configServer, startServer } from './framework/webserver/server'
import { chatInit } from './framework/service/socket'
import { connectDb } from './framework/database/connection'
import { route } from './framework/webserver/route/route'

const app: Application = express()

configServer(app)
const httpServer = startServer(app, 8000)
route(app)
connectDb()

export const io = chatInit(httpServer)
export type HttpServer = typeof httpServer