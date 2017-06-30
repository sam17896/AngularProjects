import { Component } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';

import { MarkerService} from './service/marker.service';


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
  markerForm : any;

  markers : marker[];

  constructor(private service : MarkerService){
    this.markers = this.service.getMarkers();
    let fb = new FormBuilder();
    
    this.markerForm = fb.group({
      name : ['', Validators.required],
      lat : ['', Validators.required],
      lng : ['', Validators.required],
      draggable : [false],
      
    });

  }

  clickedMarker(marker:marker , index:number){
    console.log('Clicked Marker' + marker.name + ' at ' + index );
  }

  mapClicked($event){
    var newMarker = {
      name : "Untitled",
      lat : $event.coords.lat,
      lng : $event.coords.lng,
      draggable : false
    }

    this.markers.push(newMarker)
  }

  markerDragEnd(marker:marker , $event){
    console.log("dragEnd", marker , $event);

    var updMarker = {
      name : marker.name,
      lat: marker.lat,
      lng :marker.lng,
      draggable : false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addMarker(){
    if(this.markerForm.valid){
      var marker = this.markerForm.value;

      if(marker.draggable == 'yes'){
        var isDraggable = true;
      } else {
        var isDraggable = false;
      }

      var newMarker = {
        name : marker.name,
        lat : marker.lat,
        lng : marker.lng,
        draggable : isDraggable
      }

      this.markers.push(newMarker);
      this.service.addMarker(newMarker);
      console.log(this.markers.length);

    } else {
      alert('Please fill all the fields');
    }
  }
}

interface marker {
  name? : string;
  lat : number;
  lng : number;
  draggable : boolean
}