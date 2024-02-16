import { TestBed } from '@angular/core/testing';

import { TutoServiceService } from './tuto-service.service';

describe('TutoServiceService', () => {
  let service: TutoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
