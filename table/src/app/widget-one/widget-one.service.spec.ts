import { TestBed } from '@angular/core/testing';

import { WidgetOneService } from './widget-one.service';

describe('WidgetOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetOneService = TestBed.get(WidgetOneService);
    expect(service).toBeTruthy();
  });
});
