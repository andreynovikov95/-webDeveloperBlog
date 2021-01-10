import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {
  items = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js']

  constructor() { 
  }

  ngOnInit(): void {
  }

}
