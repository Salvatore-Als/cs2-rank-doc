import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-placeholder',
  templateUrl: './table-placeholder.component.html',
  styleUrls: ['./table-placeholder.component.scss']
})
export class TablePlaceholderComponent implements OnInit {
  @Input() count: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
