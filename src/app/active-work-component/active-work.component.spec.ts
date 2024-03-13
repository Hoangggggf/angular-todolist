import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkComponent} from './active-work.component';

describe('ActiveWorkComponentComponent', () => {
  let component: ActiveWorkComponent;
  let fixture: ComponentFixture<ActiveWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
