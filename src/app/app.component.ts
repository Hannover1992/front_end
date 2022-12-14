import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:8080';

  data: any;
  constructor(private http: HttpClient) {}

  getProjects() {
    this.http.get(this.ROOT_URL + '/projects').subscribe(data => {
      this.data = data;
    });
  }
}
