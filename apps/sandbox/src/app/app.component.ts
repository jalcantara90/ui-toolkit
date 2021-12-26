import { Component } from '@angular/core';
import { ToastService } from '@sysmian/toast';

@Component({
  selector: 'sysmian-toolkit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'sandbox';

  constructor(readonly service: ToastService) {}

  show() {
    this.service.success('  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum odio fuga repudiandae impedit labore at doloremque assumenda facilis, earum soluta ex quaerat dolorem a velit quibusdam eos officiis sint illo!');
  }

  error() {
    this.service.error(this.text, { autoCloseTime: 2000, autoClose: true });
  }

  warning() {
    this.service.warning(this.text);
  }
}
