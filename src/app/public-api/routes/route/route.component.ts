import { Component, Input, OnInit } from '@angular/core';
import { Route } from './route.model';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  @Input() route!: Route;

  constructor() { }

  ngOnInit() {

  }
}
