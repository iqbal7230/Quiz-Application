import { Server } from "socket.io";
import http from 'http';

const server = http.createServer();
export class IoManager{
    private static io: Server;
    public static instance: IoManager;

    public static getIo(){
        if(!this.io){
            this.io = new IoManager();
            const io = new Server(server);
            this.io = io; 
        }
        return this.io;

    }
}