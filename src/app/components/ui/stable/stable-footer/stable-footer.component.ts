import { Component, Input } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';

@Component({
  selector: 'app-stable-footer',
  templateUrl: './stable-footer.component.html',
  styleUrls: ['./stable-footer.component.scss']
})
export class StableFooterComponent {

  @Input() gameState!: GameState;

  isDisabled(): boolean {
    if (this.gameState.jirgin.name && this.gameState.opponent.name && this.gameState.track.name) return false;
    return true;
  }

}
