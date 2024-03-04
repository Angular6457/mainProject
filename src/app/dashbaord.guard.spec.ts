import { TestBed } from '@angular/core/testing';

import { DashbaordGuard } from './dashbaord.guard';

describe('DashbaordGuard', () => {
  let guard: DashbaordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashbaordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
