import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Web Developer Blog'
  constructor(svc: NewServiceService) {
    svc.consoleText("Hello world")
  }
}
