import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeathersService{
    constructor(private htpp : Http){

    }

    getLogs(){
        return this.htpp.get('http://localhost:3030/service')
            .map(res => res.json());
    }

    addLog(log){
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        return this.htpp.post('http://localhost:3030/service', JSON.stringify(log),
        {headers: header})
        .map(res=>res.json());

    }
}