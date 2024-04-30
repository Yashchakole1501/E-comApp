import { TestBed } from '@angular/core/testing';

import { WebsitecategoryService } from './websitecategory.service';

describe('WebsitecategoryService', () => {
  let service: WebsitecategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsitecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
