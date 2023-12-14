import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, EventEmitter, Host, HostBinding, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IconDefinition, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'accordion-header',
  template: `
    <ng-content></ng-content>
    <fa-icon [icon]="faChevronUp" size="sm" class="duration-150 flex ml-auto items-center mr-2 shrink-0" [ngClass]="{'rotate-180': open }"></fa-icon>
  `
})
export class AccordionHeaderComponent {
  @Output() toogle: EventEmitter<void> = new EventEmitter();

  protected faChevronUp: IconDefinition = faChevronUp;

  @HostBinding('class') class!: string;

  @HostListener('click')
  onClick() {
    this.toogle?.emit();
  }

  get open(): boolean {
    return this.parent.open;
  }

  constructor(@Host() private parent: AccordionComponent) {

  }
}

@Component({
  selector: 'accordion-body',
  template: '<ng-content></ng-content>'
})
export class AccordionBodyComponent {
  @HostBinding('class') class!: string;
}

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('openTransition', [
      state('false', style({
        overflow: 'hidden',
        visibility: 'hidden',
        height: 0,
        'padding-top': 0,
        'padding-bottom': 0,
        'flex': '0 0 0',
        opacity: 0
      })),
      state('true', style({
        overflow: 'hidden',
        visibility: 'visible',
      }),),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out')),
    ])
  ],
})
export class AccordionComponent implements OnInit, OnDestroy {
  @ContentChild(AccordionHeaderComponent) header!: AccordionHeaderComponent;

  @Input() open: boolean = false;

  private destroy$: Subject<void> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.header?.toogle
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.open = !this.open);
  }
}
