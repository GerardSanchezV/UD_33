import { TestBed } from '@angular/core/testing';

import { Mi.ServicioService } from './mi.servicio.service';

describe('Mi.ServicioService', () => {
  let service: Mi.ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mi.ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
