import { TestBed } from '@angular/core/testing';

import { CategoryServiseService } from './category-servise.service';

describe('CategoryServiseService', () => {
  let service: CategoryServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
