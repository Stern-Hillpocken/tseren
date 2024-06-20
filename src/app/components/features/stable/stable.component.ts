import { Component } from '@angular/core';
import { GameState } from 'src/app/models/game-state.model';
import { Jirgin } from 'src/app/models/jirgin.model';
import { Opponent } from 'src/app/models/opponent.model';
import { Track } from 'src/app/models/track.model';
import { GameStateService } from 'src/app/shared/game-state.service';

@Component({
  selector: 'app-stable',
  templateUrl: './stable.component.html',
  styleUrls: ['./stable.component.scss']
})
export class StableComponent {

  gameState!: GameState;
  jirgins!: Jirgin[];
  opponents!: Opponent[];
  tracks!: Track[];

  constructor(private gss:GameStateService) {
    this.gss.get().subscribe((gs: GameState) => {
      this.gameState = gs;
    });
    this.jirgins = this.gss.getJirgins();
    this.opponents = this.gss.getOpponents();
    this.tracks = this.gss.getTracks();
  }

  onSelectedJirginReceive(jirgin: Jirgin): void {
    this.gss.setJirgin(jirgin);
  }

  onSelectedOpponentReceive(opponent: Opponent): void {
    this.gss.setOpponent(opponent);
  }

  onSelectedTrackReceive(track: Track): void {
    this.gss.setTrack(track);
  }

}
