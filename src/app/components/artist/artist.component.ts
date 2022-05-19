import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: Observable<any> = of(null);
  tracks: Observable<any> = of([]);

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.getArtist(p.id)
    })
  }

  getArtist(id: string | number): void {
    this.artistService.getArtist(id).subscribe(
      res => {
        this.artist = of(res);
        this.getTracks(id);
      },
      error => console.log(error)
    )
  }

  getTracks(id: string | number) {
    this.artistService.getTracks(id).subscribe(
      res => {
        this.tracks = of(res.data.slice(0, 5));
      },
      error => console.log(error)
    )
  }

}
