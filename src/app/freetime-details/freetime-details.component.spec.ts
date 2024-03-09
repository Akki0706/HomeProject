import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetimeDetailsComponent } from './freetime-details.component';

describe('FreetimeDetailsComponent', () => {
  let component: FreetimeDetailsComponent;
  let fixture: ComponentFixture<FreetimeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreetimeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreetimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
