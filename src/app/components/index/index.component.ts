import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    search: ['', [Validators.required]]
  });

  artists: Observable<any> = of([]);

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  searchArtists(): void {
    let { value, valid } = this.searchForm;
    if (!valid) return;
    this.artistService.searchArtists(value.search).subscribe(
      res => {
        this.artists = of(res.data);
      },
      error => console.log(error)
    )
  }

  get showAlbums(): boolean {
    if (window.innerWidth >= 992) return true;
    return false;
  }

  showDetails(artist: any): void {
    this.router.navigate(['/artist/' + artist.artist.id])
  }

}
