import { Component, Input, OnInit } from '@angular/core';
import { Configs } from './config-file.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    this.configs$ = this.httpClient
      .get<Configs>(this.path)
      .pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
