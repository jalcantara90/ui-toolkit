import { fromEvent, timer, takeUntil, repeatWhen, tap, interval, map, Observable } from 'rxjs';
import { Component, ElementRef, Inject, Input, ViewEncapsulation, OnInit } from '@angular/core';

import { Toast } from './toast';

@Component({
  selector: 'sysmian-notification',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent<I> implements OnInit {
  @Input() notification!: Toast<I>;

  readonly mouseenter$ = fromEvent(this.elementRef.nativeElement, "mouseenter");
  readonly mouseleave$ = fromEvent(this.elementRef.nativeElement, "mouseleave");

  close$!: Observable<number>;
  loading$!: Observable<string>;

  constructor(
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    this.close$ = timer(this.notification?.config?.autoCloseTime).pipe(
      takeUntil(this.mouseenter$),
      repeatWhen(() => this.mouseleave$),
      tap(this.close.bind(this))
    );

    this.loading$ = interval(this.notification?.config?.autoCloseTime / 100).pipe(
      map(tick => `${100 - (tick)}%`),
      takeUntil(this.mouseenter$),
      repeatWhen(() => this.mouseleave$),
      takeUntil(this.close$)
    );
  }

  close() {
    this.notification.observer.complete();
  }
}
