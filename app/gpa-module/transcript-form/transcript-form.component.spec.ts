import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptFormComponent } from './transcript-form.component';

describe('TranscriptFormComponent', () => {
  let component: TranscriptFormComponent;
  let fixture: ComponentFixture<TranscriptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptFormComponent] 
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