/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RacefakeService } from './racefake.service';

describe('Service: Racefake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacefakeService]
    });
  });

  it('should ...', inject([RacefakeService], (service: RacefakeService) => {
    expect(service).toBeTruthy();
  }));
});
