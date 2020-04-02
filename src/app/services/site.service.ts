import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private baseUrl = 'http://localhost:8080/campground-manager/api/v1/sites';

  constructor(private http: HttpClient) { }

  getSite(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSite(sitebo: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sitebo);
  }

  updateSite(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSite(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSitesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
