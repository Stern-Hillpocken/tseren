import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from 'src/app/models/game-state.model';
import { Module } from 'src/app/models/module.model';
import { GameStateService } from 'src/app/shared/game-state.service';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent {

  gameState!: GameState;

  constructor(private gss: GameStateService, private router: Router) {
    this.gss.get().subscribe((gs: GameState) => {
      this.gameState = gs;
      if(this.gameState.jirgin.name === "") this.router.navigateByUrl("");
    });
    this.gss.run();
  }

  onUpdateStateReceive(module: Module): void {
    this.gss.updateModule(module);
  }

}
