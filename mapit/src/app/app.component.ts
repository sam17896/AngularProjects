import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  //Start Position
  lat: number = 42.858217;
  lng: number = -70.929990;

  //Zoom Level 
  zoom : number = 10;

  markers : marker[] = [
    {
      name : 'Company One',
      lat : 42.825588,
      lng : -71.018029,
      draggable : true
    },
    {
      name : 'Company Two',
      lat : 42.868164,
      lng : -70.889071,
      draggable : true
    },
    {
      name : 'Company Three',
      lat : 42.858279,
      lng : -70.930498,
      draggable : false
    }
  ]
}

interface marker {
  name? : string;
  lat : number;
  lng : number;
  draggable : boolean
}