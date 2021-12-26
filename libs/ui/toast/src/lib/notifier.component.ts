import { Component } from '@angular/core';

import { ToastService } from './toast.service';
import { toastAnimations } from './toast.animations';

@Component({
  selector: 'sysmian-notifier',
  template: `
    <section class="notifications">
      <sysmian-notification
        *ngFor="let toast of toasts | async"
        [notification]="toast"
        @fadeInOut>
      </sysmian-notification>
    </section>
  `,
  styles: [`
    .notifications {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: .75em;
    }
  `],
  animations: [toastAnimations]
})
export class NotifierComponent {
  constructor(public readonly toasts: ToastService) {}
}
