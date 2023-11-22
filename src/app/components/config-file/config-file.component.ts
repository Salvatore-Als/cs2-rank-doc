import { Component, Input, OnInit } from '@angular/core';
import { Configs } from './config-file.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'config-file',
  templateUrl: './config-file.component.html',
  styleUrls: ['./config-file.component.scss']
})
export class ConfigFileComponent implements OnInit {
  @Input() path!: string;

  private destroy$: Subject<void> = new Subject();

  protected configs$!: Observable<Configs>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const path: string = environment.production ? `https://raw.githubusercontent.com/Salvatore-Als/cs2-rank-doc/main/src/${this.path}` : this.path;
    this.configs$ = this.httpClient
      .get<Configs>(path)
      .pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
