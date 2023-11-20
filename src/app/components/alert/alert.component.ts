import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Background, Color, Text } from '../color';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() color: Color | string = Color.ORANGE;

  @HostBinding('class')
  get class(): string {
    return Background[this.color];
  }

  get textClass(): string {
    return Text[this.color];
  }

  constructor() { }

  ngOnInit() {
  }

}
