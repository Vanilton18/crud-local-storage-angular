import { TestBed, inject } from '@angular/core/testing';

import { ExemploServiceService } from './exemplo-service.service';

describe('ExemploServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExemploServiceService]
    });
  });

  it('should be created', inject([ExemploServiceService], (service: ExemploServiceService) => {
    expect(service).toBeTruthy();
  }));
});
