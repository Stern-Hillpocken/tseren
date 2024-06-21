import { Component, Input } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';

@Component({
  selector: 'app-finish-header',
  templateUrl: './finish-header.component.html',
  styleUrls: ['./finish-header.component.scss']
})
export class FinishHeaderComponent {

  @Input() gameState!: GameState;

  head(): string {
    return this.gameState.opponent.progress >= this.gameState.track.size ? {"en": "Loose", "fr": "Perdu"}[this.gameState.settings.language] : {"en": "Win", "fr": "Gagné"}[this.gameState.settings.language];
  }

}
