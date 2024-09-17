import { TestBed } from '@angular/core/testing';

import { UfficiService } from './uffici.service';

describe('UfficiService', () => {
  let service: UfficiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfficiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
