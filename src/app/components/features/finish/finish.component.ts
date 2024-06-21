import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from 'src/app/models/game-state.model';
import { GameStateService } from 'src/app/shared/game-state.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent {

  gameState!: GameState;

  constructor(private gss: GameStateService, private router: Router) {
    this.gss.get().subscribe((gs: GameState) => {
      this.gameState = gs;
      if(this.gameState.jirgin.name === "") this.router.navigateByUrl("");
    });
  }

  onNewRunReceive(): void {
    this.gss.newRun();
    this.router.navigateByUrl("");
  }

}
