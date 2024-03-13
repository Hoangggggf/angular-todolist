import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorkComponent } from './completed-work.component';

describe('CompletedWorkComponentComponent', () => {
  let component: CompletedWorkComponent;
  let fixture: ComponentFixture<CompletedWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
