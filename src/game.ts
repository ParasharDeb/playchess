import { WebSocket } from "ws";
import { INIT_GAME } from "./messages";

export class Game{
    public player1:WebSocket
    public player2:WebSocket
    public board:string//will change
    public moves:string[]
    public starttime:Date
    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1,
        this.player2=player2
        this.board=""//needs ficing
        this.moves=[]
        this.starttime=new Date()
        this.player1.send(
            JSON.stringify({
                "type":INIT_GAME,
                "payload":{
                    color:"white"
                }
            })
        )
        this.player2.send(
            JSON.stringify({
                "type":INIT_GAME,
                "payload":{
                    color:"black"
                }
            })
        )
    }
    makeMove(socket:WebSocket,
        move:{
        from:string,
        to:String
        }
    ){
        //check if it is the players move
        //is the move valid
        //update the board
        //push it to the moves
        //check if game is over
        //send it to both the users

    }
}