import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Background, Color, Text } from '../color';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() color: Color | string = Color.ORANGE;

  constructor() { }

  @HostBinding('class')
  get cssClass(): string {
    return `${Background[this.color]} ${Text[this.color]}`;
  }


  ngOnInit() {
  }
}
