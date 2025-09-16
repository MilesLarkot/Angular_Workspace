import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { MainComponent } from './layout/main/main.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { MesTicketsComponent } from './layout/mes-tickets/mes-tickets.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { EvenementsComponent } from './layout/evenements/evenements.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'mes-tickets', component: MesTicketsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
