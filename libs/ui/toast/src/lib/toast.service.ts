import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from "rxjs";
import { Toast, ToastConfig, NotifierConfiguration, TOAST_CONFIG } from './toast';

const defaultConfig = {
  autoClose: true,
  autoCloseTime: 3000,
};

@Injectable({
  providedIn: 'root'
})
export class ToastService extends BehaviorSubject<readonly Toast<any>[]> {
  constructor(
    @Inject(TOAST_CONFIG)
    private toastConfig: NotifierConfiguration
  ) {
    super([]);
  }

  private createObserver<I>(content: I, config: NotifierConfiguration & ToastConfig): Observable<Toast<I>> {
    return new Observable((observer: Observer<Toast<I>>) => {
      const notification = {
        content,
        observer,
        config
      };

      this.next([...this.value, notification]);

      return () => this
        .next(this.value.filter(item => item !== notification));
    });
  }

  success<I>(content: I, config?: Partial<NotifierConfiguration & ToastConfig>) {
    this.createObserver(content, this.buildToastConfig({ type: 'success' }, config)).subscribe();
  }

  override error<I>(content: I, config?: Partial<NotifierConfiguration & ToastConfig>) {
    this.createObserver(content, this.buildToastConfig({ type: 'error' }, config)).subscribe();
  }

  warning<I>(content: I, config?: Partial<NotifierConfiguration & ToastConfig>) {
    this.createObserver(content, this.buildToastConfig({ type: 'warning' }, config)).subscribe();
  }

  private buildToastConfig(
    config: Partial<NotifierConfiguration> & ToastConfig,
    customConfig?: Partial<NotifierConfiguration & ToastConfig>
  ): NotifierConfiguration & ToastConfig {
    return {
      ...defaultConfig,
      ...this.toastConfig,
      ...config,
      ...customConfig
    }
  }
}
