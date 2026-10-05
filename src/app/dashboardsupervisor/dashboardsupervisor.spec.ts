import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardsupervisor } from './dashboardsupervisor';

describe('Dashboardsupervisor', () => {
  let component: Dashboardsupervisor;
  let fixture: ComponentFixture<Dashboardsupervisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardsupervisor],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardsupervisor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
