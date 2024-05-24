import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LibGabrielApiService {

  constructor(private http: HttpClient){

  }

  async getData(url: string) {
    return await this.http.get<any[]>(url).toPromise();
  }
  
}



