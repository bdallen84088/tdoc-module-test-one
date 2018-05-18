import { TestBed, inject } from '@angular/core/testing';

import { TdocTestOne\tdocTestOneService } from './tdoc-test-one\tdoc-test-one.service';

describe('TdocTestOne\tdocTestOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TdocTestOne\tdocTestOneService]
    });
  });

  it('should be created', inject([TdocTestOne\tdocTestOneService], (service: TdocTestOne\tdocTestOneService) => {
    expect(service).toBeTruthy();
  }));
});
