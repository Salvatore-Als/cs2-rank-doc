import { Component, Input, OnInit } from '@angular/core';
import { Configs } from './config-file.model';
import { Subject, takeUntil } from 'rxjs';
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

  protected configs!: Configs;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const path: string = environment.production ? environment.githubUrl + this.path : this.path;
    this.httpClient
      .get<Configs>(path)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Configs) => this.configs = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
