import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameState } from '../models/game-state.model';
import { Jirgin } from '../models/jirgin.model';
import { Track } from '../models/track.model';
import { Opponent } from '../models/opponent.model';
import { Settings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private readonly _gameState$: BehaviorSubject<GameState> = new BehaviorSubject(this.init());

  speed = {"off": -2, "min": 2, "max": 5};

  constructor() { }

  init(): GameState {
    return new GameState(new Jirgin("", [], 0), new Opponent("", 0, 0), new Track("", 0), new Settings("en"));
  }

  get(): Observable<GameState> {
    return this._gameState$.asObservable();
  }
}
