import { TestBed } from '@angular/core/testing';

import { VinylsService } from './vinyls.service';

describe('VinylsService', () => {
  let service: VinylsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinylsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
