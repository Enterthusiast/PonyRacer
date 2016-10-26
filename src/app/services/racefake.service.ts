import { Injectable } from '@angular/core';

@Injectable()
export class RacefakeService {

  list() {
    return [{ name: 'London' }];
  }

}
