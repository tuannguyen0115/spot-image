import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';
import { ScoreService } from './score.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
