import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  getAllHotels(){
      return this.http.get('https://api.npoint.io/d8c6ab8ac5307d469528');
  }
}
