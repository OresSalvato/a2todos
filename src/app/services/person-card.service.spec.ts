/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonCardService } from './person-card.service';

describe('PersonCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonCardService]
    });
  });

  it('should ...', inject([PersonCardService], (service: PersonCardService) => {
    expect(service).toBeTruthy();
  }));
});
