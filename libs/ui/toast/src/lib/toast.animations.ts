import { trigger, transition, style, animate } from "@angular/animations";

export const toastAnimations = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(20px)', }),
    animate('200ms', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('300ms', style({ opacity: 0, transform: 'translateX(20px)' })),
  ]),
])
