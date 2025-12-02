import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Request {
 private api = 'https://floodrescue-api-hndxd0baawc3hras.centralindia-01.azurewebsites.net/api/requests';

  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    return this.http.post(this.api, data);
  }

  getAllRequests() {
    return this.http.get<any[]>(this.api);
  }
}
