import { Component, Input, OnInit } from '@angular/core';
import { Commands } from './commands.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  @Input() path!: string;

  private destroy$: Subject<void> = new Subject();

  protected commands$!: Observable<Commands>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.commands$ = this.httpClient
      .get<Commands>(this.path)
      .pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
