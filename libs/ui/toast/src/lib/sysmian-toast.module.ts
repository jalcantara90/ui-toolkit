import { CommonModule } from '@angular/common';
import { NotifierComponent } from './notifier.component';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ToastComponent } from './toast.component';
import { NotifierConfiguration, TOAST_CONFIG } from './toast';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ToastComponent,
    NotifierComponent
  ],
  exports: [
    ToastComponent,
    NotifierComponent
  ],
  providers: [
    { provide: TOAST_CONFIG, useValue: { autoClose: true, autoCloseTime: 3000 } }
  ]
})
export class SysmianToastModule {
  static forRoot(config: Partial<NotifierConfiguration>): ModuleWithProviders<SysmianToastModule> {
    return {
      ngModule: SysmianToastModule,
      providers: [
        {
          provide: TOAST_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
