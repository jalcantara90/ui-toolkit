import { TestBed } from '@angular/core/testing';
import { TOAST_CONFIG } from './toast';

import { ToastService } from './toast.service';
import {cold, hot, time} from 'jest-marbles';

describe('NotificationService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TOAST_CONFIG, useValue: { autoClose: true, autoCloseTime: 3000 } }
      ]
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
