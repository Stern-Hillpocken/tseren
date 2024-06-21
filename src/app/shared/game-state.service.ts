import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameState } from '../models/game-state.model';
import { HttpClient } from '@angular/common/http'
import { Jirgin } from '../models/jirgin.model';
import { Track } from '../models/track.model';
import { Opponent } from '../models/opponent.model';
import { Settings } from '../models/settings.model';
import { Module } from '../models/module.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private readonly _gameState$: BehaviorSubject<GameState> = new BehaviorSubject(new GameState(new Jirgin("", [], 0, 0), new Opponent("", 0, 0), new Track("", 0), new Settings("en")));

  jirgins: Jirgin[] = [];
  opponents: Opponent[] = [];
  tracks: Track[] = [];

  speed = {"off": -2, "min": 2, "max": 5};

  constructor(private http: HttpClient, private router: Router) {
    this.http.get("assets/json/jirgins.json").subscribe((jJson: any) => {
      for(const j of jJson) this.jirgins.push({"name": j.name, "modules": this.modulesStringNameToArrayObject(j.modules), "currentSpeed": 0, "progress": 0});
    });
    this.http.get("assets/json/opponents.json").subscribe((oJson: any) => {
      for(const o of oJson) this.opponents.push({"name": o.name, "speed": o.speed, "progress": 0});
    });
    this.http.get("assets/json/tracks.json").subscribe((tJson: any) => {
      for(const t of tJson) this.tracks.push({"name": t.name, "size": t.size});
    });
  }

  reset(): void {
    this._gameState$.value.jirgin = new Jirgin("", [], 0, 0);
    this._gameState$.value.opponent = new Opponent("", 0, 0);
    this._gameState$.value.track = new Track("", 0);
  }

  get(): Observable<GameState> {
    return this._gameState$.asObservable();
  }

  modulesStringNameToArrayObject(modsName: string[]): Module[] {
    let mods: Module[] = [];
    for(const i in modsName) {
      mods.push({"name": modsName[i], "state": "off"});
    }
    return mods;
  }

  getJirgins(): Jirgin[] {
    return this.jirgins;
  }

  setJirgin(jirgin: Jirgin): void {
    this._gameState$.value.jirgin = jirgin;
  }

  getOpponents(): Opponent[] {
    return this.opponents;
  }

  setOpponent(opponent: Opponent): void {
    this._gameState$.value.opponent = opponent;
  }

  getTracks(): Track[] {
    return this.tracks;
  }

  setTrack(track: Track): void {
    this._gameState$.value.track = track;
  }

  run(): void {
    setTimeout(() => {
      this.tick();
    }, 3000);
  }

  tick(): void {
    console.log("tick")
    let isFinish: boolean = false;
    // Opponent move
    this._gameState$.value.opponent.progress += this._gameState$.value.opponent.speed;
    if(this._gameState$.value.opponent.progress >= this._gameState$.value.track.size) {
      isFinish = true;
      this.router.navigateByUrl("finish");
    }

    // Player move
    this._gameState$.value.jirgin.currentSpeed = 0;
    for(let mod of this._gameState$.value.jirgin.modules) {
      this._gameState$.value.jirgin.currentSpeed += this.speed[mod.state];
    }
    if(this._gameState$.value.jirgin.currentSpeed > 0) this._gameState$.value.jirgin.progress += this._gameState$.value.jirgin.currentSpeed;
    if(this._gameState$.value.jirgin.progress >= this._gameState$.value.track.size) {
      isFinish = true;
      this.router.navigateByUrl("finish");
    }

    // Restart
    if(!isFinish){
      setTimeout(() => {this.tick();}, 1000);
    }
  }

  updateModule(module: Module): void {
    for(let mod of this._gameState$.value.jirgin.modules) {
      if(mod.name === module.name) {
        mod.state = module.state;
        break;
      }
    }
  }

  newRun(): void {
    this.reset();
    console.log(this._gameState$.value)
  }

}
