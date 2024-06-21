import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RunPageComponent } from './pages/run-page/run-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsComponent } from './components/features/settings/settings.component';
import { HomeHeaderComponent } from './components/ui/home/home-header/home-header.component';
import { HomeButtonsComponent } from './components/ui/home/home-buttons/home-buttons.component';
import { HomeSettingsComponent } from './components/ui/home/home-settings/home-settings.component';
import { RunHeaderComponent } from './components/ui/run/run-header/run-header.component';
import { RunComponent } from './components/features/run/run.component';
import { HomeComponent } from './components/features/home/home.component';
import { StablePageComponent } from './pages/stable-page/stable-page.component';
import { StableComponent } from './components/features/stable/stable.component';
import { StableHeaderComponent } from './components/ui/stable/stable-header/stable-header.component';
import { StableJirginComponent } from './components/ui/stable/stable-jirgin/stable-jirgin.component';
import { StableOpponentComponent } from './components/ui/stable/stable-opponent/stable-opponent.component';
import { StableTrackComponent } from './components/ui/stable/stable-track/stable-track.component';
import { StableFooterComponent } from './components/ui/stable/stable-footer/stable-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModClickerComponent } from './components/ui/run/jirgin-modules/mod-clicker/mod-clicker.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';
import { FinishComponent } from './components/features/finish/finish.component';
import { FinishHeaderComponent } from './components/ui/finish/finish-header/finish-header.component';
import { FinishSummaryComponent } from './components/ui/finish/finish-summary/finish-summary.component';
import { FinishFooterComponent } from './components/ui/finish/finish-footer/finish-footer.component';
import { ModBinaryComponent } from './components/ui/run/jirgin-modules/mod-binary/mod-binary.component';
import { ModResizeComponent } from './components/ui/run/jirgin-modules/mod-resize/mod-resize.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RunPageComponent,
    SettingsPageComponent,
    HomeComponent,
    RunComponent,
    SettingsComponent,
    HomeHeaderComponent,
    HomeButtonsComponent,
    HomeSettingsComponent,
    RunHeaderComponent,
    StablePageComponent,
    StableComponent,
    StableHeaderComponent,
    StableJirginComponent,
    StableOpponentComponent,
    StableTrackComponent,
    StableFooterComponent,
    ModClickerComponent,
    FinishPageComponent,
    FinishComponent,
    FinishHeaderComponent,
    FinishSummaryComponent,
    FinishFooterComponent,
    ModBinaryComponent,
    ModResizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
