import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }
  getTest() {
    return this.http.get("http://localhost:3000/messages")
  }
}
