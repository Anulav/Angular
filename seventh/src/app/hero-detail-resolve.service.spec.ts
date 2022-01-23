import { TestBed } from '@angular/core/testing';

import { HeroDetailResolveService } from './hero-detail-resolve.service';

describe('HeroDetailResolveService', () => {
  let service: HeroDetailResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDetailResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
