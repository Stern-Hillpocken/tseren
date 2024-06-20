import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Opponent } from 'src/app/models/opponent.model';

@Component({
  selector: 'app-stable-opponent',
  templateUrl: './stable-opponent.component.html',
  styleUrls: ['./stable-opponent.component.scss']
})
export class StableOpponentComponent {

  @Input() opponents!: Opponent[];

  @Output() selectedOpponentEmitter: EventEmitter<Opponent> = new EventEmitter();

  selectOpponent(opponent: Opponent): void {
    this.selectedOpponentEmitter.emit(opponent);
  }

}
