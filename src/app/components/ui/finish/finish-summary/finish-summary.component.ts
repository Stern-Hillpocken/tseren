import { Component, Input } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';

@Component({
  selector: 'app-finish-summary',
  templateUrl: './finish-summary.component.html',
  styleUrls: ['./finish-summary.component.scss']
})
export class FinishSummaryComponent {

  @Input() gameState!: GameState;

}
