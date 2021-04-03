import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonUtil } from '../utils/CommonUtil';
import { Noodle } from '../models/Noodle';

@Injectable({
  providedIn: 'root'
})
export class NoodleService {

  noodles: Array<Noodle>;

  constructor(
    private http: HttpClient
  ) { }

  fetchNoodles(): Observable<any> {
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json');
  }

  fetchImages(): Observable<any> {
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json');
  }

  fetchNoodlesWithImage(): Observable<Array<Noodle>> {
    if (this.noodles) { return of(this.noodles); }
    return forkJoin({
      noodles: this.fetchNoodles(),
      images: this.fetchImages()
    }).pipe(
      map(response => {
        response.noodles.forEach((noodle, i) => {
          const randomIndex = CommonUtil.randomIntFromInterval(0, 6);
          noodle.Image = response.images[randomIndex].Image;
          noodle.Id = i + 1;
        });
        this.noodles = response.noodles;
        return response.noodles;
      })
    );
  }
}
