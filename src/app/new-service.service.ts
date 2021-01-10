import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  constructor() { }

  consoleText(arg) {
    console.log(arg)
  }
}
