import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { RunPageComponent } from './pages/run-page/run-page.component';
import { StablePageComponent } from './pages/stable-page/stable-page.component';
import { FinishPageComponent } from './pages/finish-page/finish-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'stable', component: StablePageComponent },
  { path: 'run', component: RunPageComponent },
  { path: 'finish', component: FinishPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: '**', component: HomePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
