import { Component, Input } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';

@Component({
  selector: 'app-run-header',
  templateUrl: './run-header.component.html',
  styleUrls: ['./run-header.component.scss']
})
export class RunHeaderComponent {

  @Input() gameState!: GameState;

}
