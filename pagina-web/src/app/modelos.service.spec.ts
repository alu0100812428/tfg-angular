import { TestBed, inject } from '@angular/core/testing';

import { ModelosService } from './modelos.service';

describe('ModelosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelosService]
    });
  });

  it('should ...', inject([ModelosService], (service: ModelosService) => {
    expect(service).toBeTruthy();
  }));
});
