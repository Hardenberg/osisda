import express from "express";

export interface OsisdaServerInterface{
    start(): void;
}

export class OsisdaServer implements OsisdaServerInterface{
    start(): void {
        const server = express();
        server.get( "/", ( _req, res ) => {
            res.send('hallo');
        } );
        server.listen(3000, () => {
            console.log('es läuft')
        })
    }
}