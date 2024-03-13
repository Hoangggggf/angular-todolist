import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorkComponentComponent } from './completed-work-component.component';

describe('CompletedWorkComponentComponent', () => {
  let component: CompletedWorkComponentComponent;
  let fixture: ComponentFixture<CompletedWorkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedWorkComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedWorkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
