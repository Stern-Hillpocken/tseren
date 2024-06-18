import { Component } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';
import { Settings } from 'src/app/models/settings.model';
import { GameStateService } from 'src/app/shared/game-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  settings!: Settings;

  constructor(private gss: GameStateService) {
    this.gss.get().subscribe((gs: GameState) => {
      this.settings = gs.settings;
    });
  }

}
