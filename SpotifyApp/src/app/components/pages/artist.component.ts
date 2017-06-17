import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
})
export class ArtistComponent implements OnInit {
    private id: number;
    private artists: Artist[];
    private albums: Album[];

    constructor(private spotify: SpotifyService,
                private route: ActivatedRoute){

    }

    ngOnInit(): void {
        this.route.params
            .map(params => params['id'])
            .subscribe( (id) => {
                this.spotify.getArtist(id)
                    .subscribe(res => {
                        this.artists = res;
                    })
            })
    }
    
  
}

interface Artist{
  id: number;
  name: string;
  genres: any;
  albums: Album[];
}

interface Album{
  id: number;
}
