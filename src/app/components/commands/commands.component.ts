import { Component, Input, OnInit } from '@angular/core';
import { Commands } from './commands.model';
import { Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  @Input() path!: string;

  private destroy$: Subject<void> = new Subject();

  protected commands!: Commands;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const path: string = environment.production ? environment.githubUrl + this.path : this.path;
    this.httpClient
      .get<Commands>(path)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Commands) => this.commands = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
