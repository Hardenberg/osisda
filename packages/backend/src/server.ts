import express from "express";
import cors from "cors";

export interface OsisdaServerInterface {
    start(): void;
}

export class OsisdaServer implements OsisdaServerInterface {
    start(): void {
        const server = express();
        server.use(cors())

        server.get("/", (_req, res) => {
            res.send('hello World');
        });
        server.use('/login', (_req, res) => {
            res.send({
                token: 'test123'
            });
        });

        server.listen(3001, () => {
            console.log('is running')
        })
    }
}