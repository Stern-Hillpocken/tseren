import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages } from 'src/app/types/languages.type';

@Component({
  selector: 'app-finish-footer',
  templateUrl: './finish-footer.component.html',
  styleUrls: ['./finish-footer.component.scss']
})
export class FinishFooterComponent {

  @Input() language!: Languages;

  @Output() newRunEmitter: EventEmitter<void> = new EventEmitter();

  newRun(): void {
    this.newRunEmitter.emit();
  }

}
