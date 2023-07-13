import express, { Application } from 'express'
import cors from 'cors'

export const configServer = (app: Application) => {   
    app.use(cors({ origin: "http://localhost:4200" }))
    app.use(express.json())
    app.use(express.urlencoded())
    
}
export const startServer = (app: Application, PORT: number) => {
    app.listen(PORT, () => {
        console.log("profile server started on", PORT)
    })
}
