import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit {
    private id: number;
    private album: Album[];

    constructor(private spotify: SpotifyService,
                private route: ActivatedRoute){

    }

    ngOnInit(): void {
        this.route.params
            .map(params => params['id'])
            .subscribe( (id) => {
                this.spotify.getAlbum(id)
                    .subscribe(res => {
                        this.album = res;
                    })    
            })
    }
}

interface Album{
  id: number;
}



