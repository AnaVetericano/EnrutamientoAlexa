import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbooardadmin } from './dashbooardadmin';

describe('Dashbooardadmin', () => {
  let component: Dashbooardadmin;
  let fixture: ComponentFixture<Dashbooardadmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashbooardadmin],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashbooardadmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
