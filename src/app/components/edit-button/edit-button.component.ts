import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faPen } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {
  @Input() path!: string;

  protected faPen: IconDefinition = faPen;
  protected href!: string;

  constructor() { }

  ngOnInit() {
    this.href = environment.editGithubUrl + this.path;
  }

}
