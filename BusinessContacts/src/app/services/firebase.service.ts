import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map'

@Injectable()
export class FirebaseService{
    businesses : FirebaseListObservable<Business[]>;
    categories : FirebaseListObservable<Category[]>;

    constructor(private db : AngularFireDatabase){

    }

    getBusinesses(category:string = "0"){
        if(category != "0"){
            this.businesses = this.db.list('/businesses', {
                query : {
                    orderByChild : 'category',
                    equalTo : category
                }
            }) as FirebaseListObservable<Business[]>;
        } else {
            this.businesses = this.db.list('/businesses') as FirebaseListObservable<Business[]>;
        }
        return this.businesses;
    }

     getCategories(){
        this.categories = this.db.list('/categories') as FirebaseListObservable<Category[]>;
        return this.categories;

    }

    addBusiness(newBusiness){
        this.businesses.push(newBusiness);
    }

    updateBusiness(key, newBusiness){
        this.businesses.update(key,newBusiness);
    }

    deleteBusiness(key){
        this.businesses.remove(key); 
    }
}


interface Business{
    $key? : string,
    category : string,       
    city?: string,
    company? : string,
    description? : string,
    email? : string,
    phone? : string,
    state? : string,
    street_address? : string,
    year_in_business? : string,
    zipcode? : number,
    created_at : string
} 

interface Category{
    $key? :string,
    name? : string
}
