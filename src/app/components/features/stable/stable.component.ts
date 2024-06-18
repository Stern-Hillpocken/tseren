import { Component } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';
import { GameStateService } from 'src/app/shared/game-state.service';

@Component({
  selector: 'app-stable',
  templateUrl: './stable.component.html',
  styleUrls: ['./stable.component.scss']
})
export class StableComponent {

  gameState!: GameState;

  constructor(private gss:GameStateService) {
    this.gss.get().subscribe((gs: GameState) => {
      this.gameState = gs;
    });
  }

}
