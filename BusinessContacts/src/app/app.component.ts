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

  activeCompany : string;
  activeCategory : string;
  activeYearsInBusiness : string;
  activeDescription : string;
  activePhone : string;
  activeEmail : string;
  activeStreetAddress : string;
  activeCity : string;
  activeState : string;
  activeZipcode: string;

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

  showEdit(business){
    this.changeState('edit', business.$key);
    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeYearsInBusiness = business.year_in_business;
    this.activeDescription = business.description;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeStreetAddress = business.street_address;
    this.activeCity = business.city;
    this.activeState = business.state;
    this.activeZipcode = business.zipcode;
     
  }

  updateBusiness(event){
    event.preventDefault();
    var updBusiness = {
      company:this.activeCompany,
      category:this.activeCategory,
      year_in_business:this.activeYearsInBusiness,
      description:this.activeDescription,
      phone:this.activePhone,
      email:this.activeEmail,
      street_address:this.activeStreetAddress,
      city:this.activeCity,
      state:this.activeState,
      zipcode:this.activeZipcode
    }

    this.firebase.updateBusiness(this.activeKey, updBusiness);
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
