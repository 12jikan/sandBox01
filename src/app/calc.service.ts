import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalcService {

  constructor() { }

  add(x, y) {
    return x + y;
  }



}