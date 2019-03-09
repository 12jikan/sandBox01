import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../calc.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  test;

  constructor(private _calc: CalcService) { }

  ngOnInit() {
    this.test = this._calc.add(1, 3);

  }

}
