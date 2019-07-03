import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TeamGeneratorComponent } from './team-generator/team-generator.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component'

@NgModule({
  declarations: [
    AppComponent,
    TeamGeneratorComponent,
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
