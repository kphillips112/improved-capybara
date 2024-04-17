import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Import if you're using reactive forms

import { TranscriptFormComponent } from './transcript-form.component';

describe('TranscriptFormComponent', () => {
  let component: TranscriptFormComponent;
  let fixture: ComponentFixture<TranscriptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranscriptFormComponent], // Declare the component here
      imports: [ReactiveFormsModule] // Import ReactiveFormsModule if you're using reactive forms
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranscriptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});