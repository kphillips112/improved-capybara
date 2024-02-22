import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TranscriptTableComponent } from './gpa-module/transcript-table/transcript-table.component';

export const routes: Routes = [
  { path: 'profile', component: ProfilePageComponent },
  { path: 'detail', component: DetailPageComponent },
  { path: 'transcript', component: TranscriptTableComponent },
  { path: '', component: ProfilePageComponent },
  { path: '**', redirectTo: 'profile' },
];
