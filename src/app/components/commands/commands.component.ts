import { Component, Input, OnInit } from '@angular/core';
import { Commands } from './commands.model';
import { Observable, Subject, takeUntil } from 'rxjs';
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

  protected commands$!: Observable<Commands>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const path: string = environment.production ? `https://raw.githubusercontent.com/Salvatore-Als/cs2-rank-doc/main/src/${this.path}` : this.path;

    setTimeout(() => {
      this.commands$ = this.httpClient
        .get<Commands>(path)
        .pipe(takeUntil(this.destroy$));
    }, 8000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
