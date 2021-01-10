import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title: string = 'Web Developer Blog'
  userName: string = ''
  response: object = {}

  constructor(private http: HttpClient, svc: NewServiceService) {
    svc.consoleText("Hello world")
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe(response => {
        this.response = response
        console.log(this.response)
      })
  }
}
