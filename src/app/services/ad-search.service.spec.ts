import { TestBed } from '@angular/core/testing';

import { AdSearchService } from './ad-search.service';

describe('AdSearchService', () => {
  let service: AdSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
