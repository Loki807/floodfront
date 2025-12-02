import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRequest } from './submit-request';

describe('SubmitRequest', () => {
  let component: SubmitRequest;
  let fixture: ComponentFixture<SubmitRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
