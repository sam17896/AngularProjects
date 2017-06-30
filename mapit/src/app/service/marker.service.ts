import {Injectable} from '@angular/core';
import {Init} from '../init-markers';
@Injectable()
export class MarkerService extends Init {
    constructor(){
        super();
        console.log('service running');
        this.load();
    }

    getMarkers(){
        var markers = JSON.parse(localStorage.markers);
        return markers;
    }

    addMarker(marker){
        var markers = JSON.parse(localStorage.markers);
        markers.push(marker);
        localStorage.markers = JSON.stringify(markers);
    }
}