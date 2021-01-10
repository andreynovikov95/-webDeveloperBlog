import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {
  items = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js']
  loggedIn = false
  message = new Date().toLocaleTimeString()

  constructor() { 
    setInterval(() => {
      this.message = new Date().toLocaleTimeString()
    }, 1000)
  }

  ngOnInit(): void {
  }

}
