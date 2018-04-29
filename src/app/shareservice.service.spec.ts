import { TestBed, inject } from '@angular/core/testing';

import { ShareserviceService } from './shareservice.service';

describe('ShareserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareserviceService]
    });
  });

  it('should be created', inject([ShareserviceService], (service: ShareserviceService) => {
    expect(service).toBeTruthy();
  }));
});
