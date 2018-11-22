import { TestBed, inject } from '@angular/core/testing';

import { TestAngularService } from './test-angular.service';

describe('TestAngularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAngularService]
    });
  });

  it('should be created', inject([TestAngularService], (service: TestAngularService) => {
    expect(service).toBeTruthy();
  }));
});
