import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Transcript } from '../transcript-table/transcript';

@Component({
  selector: 'app-transcript-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './transcript-form.component.html',
  styleUrl: './transcript-form.component.css',
})
export class TranscriptFormComponent implements OnInit {
  @Output() transcriptAdded = new EventEmitter<Transcript>();

  transcriptForm!: FormGroup;

  ///make a list of grades to display in the dropdown
  grade = ['A (Pass)', 'B (Pass)', 'C (Pass)', 'D (Pass)', 'F (Fail)' ];

  ///make a list of types to display in the dropdown
  type = ['Major', 'Core', 'Elective'];

  ngOnInit(): void {
    this.transcriptForm = new FormGroup({
      code: new FormControl(null, Validators.required),
      name: new FormControl('1', Validators.required),
      grade: new FormControl(),
      gpa: new FormControl(null, Validators.required),
      credits: new FormControl(null, Validators.required),
      type: new FormControl(),
    });
  }

  onSubmit() {
    if (this.transcriptForm.valid) {
      console.log('form submitted');
      console.log(this.transcriptForm.value);
      const newTranscript: Transcript = {
        code: this.transcriptForm.value.code,
        name: this.transcriptForm.value.name,
        grade: this.transcriptForm.value.grade,
        gpa: this.transcriptForm.value.gpa,
        credits: this.transcriptForm.value.credits,
        type: this.transcriptForm.value.type,
      };

      console.log(newTranscript);
      this.transcriptAdded.emit(newTranscript);
    } else {
      console.error('form invalid');
    }
  }
}