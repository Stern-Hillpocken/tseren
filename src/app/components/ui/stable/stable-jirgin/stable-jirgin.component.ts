import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jirgin } from 'src/app/models/jirgin.model';

@Component({
  selector: 'app-stable-jirgin',
  templateUrl: './stable-jirgin.component.html',
  styleUrls: ['./stable-jirgin.component.scss']
})
export class StableJirginComponent {

  @Input() jirgins!: Jirgin[];

  @Output() selectedJirginEmitter: EventEmitter<Jirgin> = new EventEmitter();

  selectJirgin(jirgin: Jirgin): void {
    this.selectedJirginEmitter.emit(jirgin);
  }

}
