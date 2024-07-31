import { Socket } from 'socket.io';

export class UserMananger {
    private user:{
        roomId: string;
        socket: string;

    }[]; // array of users

    constructor(){
        this.user = [];
    }

    addUser(roomId: string, socket: string){
        this.user.push({
            socket, roomId
        })
        this.createHandler();
    }
    private createHandler(roomId: string, socket: string){
        socket.on('submissions', (data) => {


        });
    }
}
