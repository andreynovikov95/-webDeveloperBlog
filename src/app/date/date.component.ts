import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {
  message: string
  constructor() { 
    this.message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, hic!'
  }

  ngOnInit(): void {
  }

}
