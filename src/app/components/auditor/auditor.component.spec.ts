import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorComponent } from './auditor.component';

describe('AuditorComponent', () => {
  let component: AuditorComponent;
  let fixture: ComponentFixture<AuditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
