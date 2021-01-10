import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {
  items = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js']
  loggedIn = false
  isCollapsed: boolean = true
  message = new Date().toLocaleTimeString()
  oneWayBinding: string = "Hello world"
  twoWayBinding: string = "Hi"

  constructor() { 
    setInterval(() => {
      this.message = new Date().toLocaleTimeString()
    }, 1000)
  }

  ngOnInit(): void {
  }

  myEvent(event) {
    console.log(event)
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed
  }

}
