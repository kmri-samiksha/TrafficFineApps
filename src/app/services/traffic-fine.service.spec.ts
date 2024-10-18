import { TestBed } from '@angular/core/testing';

import { TrafficFineService } from './traffic-fine.service';

describe('TrafficFineService', () => {
  let service: TrafficFineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficFineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
