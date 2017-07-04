import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';


export class ChatService {
    private url = 'http://localhost:8000';
    private socket : any;
}