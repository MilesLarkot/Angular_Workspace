import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { CardComponent } from './layout/card/card.component';
import { EvenementsComponent } from './layout/evenements/evenements.component';
import { MesTicketsComponent } from './layout/mes-tickets/mes-tickets.component';
import { FeedbackComponent } from './layout/feedback/feedback.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent,
    EvenementsComponent,
    MesTicketsComponent,
    FeedbackComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
