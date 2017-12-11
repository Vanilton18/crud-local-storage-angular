import { TestBed, inject } from '@angular/core/testing';

import { Exemplo3Service } from './exemplo3.service';

describe('Exemplo3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Exemplo3Service]
    });
  });

  it('should be created', inject([Exemplo3Service], (service: Exemplo3Service) => {
    expect(service).toBeTruthy();
  }));
});
