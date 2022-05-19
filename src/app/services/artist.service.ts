import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  baseUrl: string = environment.baeUrl;

  constructor(
    private http: HttpClient
  ) {}

  searchArtists(q: string): Observable<any> {
    return this.http.get<any>('/api/search?q=artist:"' + q + '"').pipe(
      catchError(this.handleError)
    )
  }

  getArtist(id: string | number): Observable<any> {
    return this.http.get<any>('/api/artist/' + id).pipe(
      catchError(this.handleError)
    )
  }

  getTracks(id: string | number): Observable<any> {
    return this.http.get<any>('/api/artist/' + id + '/top?limit=50').pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error)
  }
}
