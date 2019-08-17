import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DetailService {

  constructor(
    private http: HttpClient
  ) { }

  public getFullDetail() {

    return this.http.get(`http://api.tvmaze.com/schedule`, {
        params: new HttpParams().set('country', 'US')
    });
  }
}
