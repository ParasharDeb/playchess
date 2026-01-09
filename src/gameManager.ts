import { WebSocket } from "ws";
import { Game } from "./game";
export class GameManager{
    private waitingplayer:WebSocket|null;
    private games:Game[]
    private users:WebSocket[]
    constructor(){
        this.games=[]    // should not be a in memeory varibale
        this.waitingplayer=null
        this.users=[]   //didnt understand why this is empty**
    }
    addUser(socket:WebSocket){
        this.users.push(socket);
        this.addHandler(socket)
    }
    removeUser(socket:WebSocket){
        this.users=this.users.filter(user=>user!== socket)
    }
    private addHandler(socket:WebSocket){
        socket.on("message",(data)=>{
            const message=JSON.parse(data.toString())

            if(message.type=="init_game"){
                if(this.waitingplayer){
                    const game = new Game(this.waitingplayer,socket)
                    this.games.push(game);
                    this.waitingplayer=null
                }
                else{
                    this.waitingplayer=socket
                    
                }
            }
        })
    }
}