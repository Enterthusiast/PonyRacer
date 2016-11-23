/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {RacefakeService} from "../services/racefake.service";
import {RaceService} from "../services/race.service";
import {ApiService} from "../services/api.service";

// describe('Component: Races', () => {
//   it('should create an instance', () => {
//     let apiService = new ApiService();
//     let raceService = new RaceService(apiService);
//     let component = new RacesComponent(raceService);
//     expect(component).toBeTruthy();
//   });
// });

describe('RaceService', () => {

  const racefakeService = jasmine.createSpyObj('RacefakeService', ['get']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [RaceService,  { provide: ApiService, useValue: racefakeService }]
  }));

  it('should return races when list() is called', () => {

    racefakeService.get.and.returnValue([{ name: 'Lyon' }, { name: 'London' }]);

    const service = TestBed.get(RaceService);
    const races = service.list();

    expect(races.length).toBe(2);
    expect(races[0].name).toBe('Lyon');
    expect(racefakeService.get).toHaveBeenCalledWith('/races');

  });

});
