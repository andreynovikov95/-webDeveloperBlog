import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {
  message: string = new Date().toLocaleTimeString()
  oneWayBinding: string = "Hello world"
  twoWayBinding: string = "Hi"
  items: string[] = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js']
  loggedIn: boolean = false
  isCollapsed: boolean = true
  visibility: boolean = true

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

  toggle() {
    this.visibility = !this.visibility
  }

}
