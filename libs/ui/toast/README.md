# Sysmian-notifier

Lightweight solution to show customizable toast

## Installation 

> npm i @sysmian/toast


## Setup

```typescript
// app.module.ts
import { SysmianToastModule } from '@sysmian/toast';

@NgModule({
  ...
  imports: [
    ...
    SysmianToastModule,
    BrowserAnimationsModule // or NoopAnimationsModule to deactivate the animations
    ...
  ],
  ...
})
export class AppModule {}
```

```html
<!-- app.component.html -->
<sysmian-notifier></sysmian-notifier>
```

## Use case

```typescript

// some.component.ts
import { ToastService } from '@sysmian/toast';

@Component({
  ...
})
export class SomeComponent {
  constructor(private toastService: ToastService) {}

  showNotification() {
    this.toastService.success('My Amazing toast.');
    this.toastService.warning('Be care It\'s very easy to use.');
    this.toastService.error('Not use it.');
  }
}
```


## Customization

You can customize the behavior of auto close and the time for auto close using forRoot import

```typescript
@NgModule({
  ...
  imports: [
    ...
    SysmianToastModule.forRoot({
      autoClose: true, // true is the default value
      autoCloseTime: 5000 // 3000 is the default value is measured in ms
    })
    ...
  ],
  ...
})
export class AppModule {}
```

Is posible to customize the appearance using the next css variables

|                 Variable                  |    Default value     |
|-------------------------------------------|:--------------------:|
| --notification-text-color                 |  #FFFFFF             |
| --notification-success-bg                 |  #23C552             |
| --notification-warning-bg                 |  #F84F31             |
| --notification-error-bg                   |  #D00104             |
| --notification-progress-bar-bg            |  #ffffff30           |
| --notification-shadow                     |  #5d5d5d             |
| --notification-progress-bar-filled-bg     |  #ffffffa6           |
| --notification-font-family                |  sans serif          |
| --notification-font-weight                |  bold                |
| --notification-border-radius              |  .25em               |
| --notification-margin                     |  .5em .25em          |
| --notification-padding                    |  .75em 3em 1em 1em   |
| --notification-max-width                  |  25em                |

