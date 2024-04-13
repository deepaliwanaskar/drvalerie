import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimatorComponent } from './text-animator.component';

describe('TextAnimatorComponent', () => {
  let component: TextAnimatorComponent;
  let fixture: ComponentFixture<TextAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextAnimatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
