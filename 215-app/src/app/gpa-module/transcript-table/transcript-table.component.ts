import { Component } from '@angular/core';
import { Transcript } from './transcript';
import { NgFor } from '@angular/common';
import { TranscriptFormComponent } from '../transcript-form/transcript-form.component';

@Component({
  selector: 'app-transcript-table',
  standalone: true,
  imports: [NgFor, TranscriptFormComponent],
  templateUrl: './transcript-table.component.html',
  styleUrl: './transcript-table.component.css',
})
export class TranscriptTableComponent {
  transcriptArray: Transcript [] = [
    { code: 'COM215', name: 'Introduction to Web Development', grade: 'A (Pass)', gpa: 4.0, credits: 3, type: 'Elective' },
    { code: 'ART323', name: 'Brand Identity Design', grade: 'A (Pass)', gpa: 4.0, credits: 3,  type:'Major'} , 
    { code: 'ART333', name: 'Contemporary Art History', grade: 'A (Pass)', gpa: 4.0, credits: 3, type: 'Major' },


    {
      code: 'ART325',
      name: 'User Experience Design',
      grade: 'A (Pass)',
      gpa: 4.0,
      credits: 3, 
      type: 'Major'
    },
    {
      code: 'CTI405',
      name: "Children's Literature",
      grade: 'A (Pass)',
      gpa: 4.0,
      credits: 3, 
      type: 'Core'
    },

      ];

      onTranscriptAdded(transcript: Transcript) {
        this.transcriptArray.push(transcript);
      }
    }