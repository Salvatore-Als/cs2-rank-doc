import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Routes } from './route/route.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'public-api-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  private destroy$: Subject<void> = new Subject();

  protected routes!: Routes;
  protected path: string = "/assets/public-api-route.json";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const path: string = environment.production ? environment.githubUrl + this.path : this.path;
    this.httpClient
      .get<Routes>(path)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Routes) => this.routes = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
