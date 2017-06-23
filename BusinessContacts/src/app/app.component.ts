import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {FirebaseService} from './services/firebase.service';

@Component({
  moduleId : module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  businesses : Business[];
  categories : Category[];

  appState : string;
  activeKey : string;

  constructor(private firebase: FirebaseService) {
    console.log('service ready');
  }

  ngOnInit(){
    this.appState = 'default';
    this.firebase.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });

    this.firebase.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key){
    if(key){
      this.activeKey = key;
    }

    this.appState = state;
  }

  filterCategory(category){
    this.firebase.getBusinesses(category)
      .subscribe(businesses => {
        this.businesses = businesses;
      });
  }

  addBusiness(
    company:string,
    category:string,
    year_in_business:string,
    description:string,
    phone:string,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:string,
    event
  ){
    event.preventDefault();
    var created_at = new Date().toString();

    var newBusiness = {
      company:company,
      category:category,
      year_in_business:year_in_business,
      description:description,
      phone:phone,
      email:email,
      street_address:street_address,
      city:city,
      state:state,
      zipcode:zipcode
    }
   // console.log(newBusiness);
     this.firebase.addBusiness(newBusiness);
      this.changeState('default', null);

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
