import { TestBed, inject } from '@angular/core/testing';

import { EjecucionesService } from './ejecuciones.service';

describe('EjecucionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjecucionesService]
    });
  });

  it('should ...', inject([EjecucionesService], (service: EjecucionesService) => {
    expect(service).toBeTruthy();
  }));
});
