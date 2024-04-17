import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptTableComponent } from './transcript-table.component';

describe('TranscriptTableComponent', () => {
  let component: TranscriptTableComponent;
  let fixture: ComponentFixture<TranscriptTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranscriptTableComponent] // Declare the component here
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranscriptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});