import {Injectable} from '@angular/core'
import {Message} from '../bean/Message'
//import {Observable} from 'rxjs/Observable';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable  } from 'rxjs';
import {catchError,map,tap  } from "rxjs/operators";

@Injectable()
export class MessageService {
    messageUrl:string

    constructor(private http:HttpClient) {}

    getMessages() : Message[] {
        let msgs = new Array <Message> (10);
        for (let i = 0; i < 10; i++) {
            let msg = new Message()
            msg.content = "this new message with " + i;
            msg.what = i;
            msgs[i] = msg
        }
        return msgs;
    }

    getMessageFromWeb():Observable<any>{
        return this.http.get(this.messageUrl)
    }

   /* private handleError<T>(operation='operation',result?:T){
            return (error:any):Observable<T> => {
                return (result as T);
            };
    }*/
}