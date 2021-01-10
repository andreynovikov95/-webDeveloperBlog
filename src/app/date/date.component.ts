import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {
  message: string
  constructor() { 
    this.message = new Date().toDateString()
  }

  ngOnInit(): void {
  }

}
