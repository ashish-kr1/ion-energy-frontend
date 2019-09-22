import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Service {
    constructor(private http: HttpClient) { }
    header() {
        return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    getTemperature(): Observable<any> {
        return this.http.get('http://localhost:3000/gettemp', { headers: this.header() });
    }
    getdata(month): Observable<any> {
        return this.http.get(`http://localhost:3000/getdata/${month.name}`, { headers: this.header() });
    }
    getAllTemp(): Observable<any> {
        return this.http.get('http://localhost:3000/getAllTemp', { headers: this.header() });
    }
}