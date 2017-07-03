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
}