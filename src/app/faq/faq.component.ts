import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

interface FaqItem {
  question: string;
  response: string;
}[]

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  private destroy$: Subject<void> = new Subject();

  protected faqItems!: FaqItem[];
  protected path: string = "/assets/faq.json";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const path: string = environment.production ? environment.githubUrl + this.path : this.path;
    this.httpClient
      .get<FaqItem[]>(path)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: FaqItem[]) => this.faqItems = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
