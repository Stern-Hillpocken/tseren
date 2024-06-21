import { Component, EventEmitter, Output } from '@angular/core';
import { Module } from 'src/app/models/module.model';
import { UtilsService } from 'src/app/shared/utils.service';
import { ModuleNames } from 'src/app/types/module-names.type';
import { ModuleStates } from 'src/app/types/module-states.type';

@Component({
  selector: 'app-mod-binary',
  templateUrl: './mod-binary.component.html',
  styleUrls: ['./mod-binary.component.scss', '../../../../../pages/run-page/run-page.component.scss']
})
export class ModBinaryComponent {

  name: ModuleNames = "binary";
  state: ModuleStates = "off";

  @Output() updateStateEmitter: EventEmitter<Module> = new EventEmitter();

  targetValue: number = 127;
  currentValue: number = 0;

  buttonValue: number[] = [1, 2, 4, 8, 16, 32, 64];
  buttonActivated: boolean[] = [false, false, false, false, false, false, false];

  light: number = 2;

  constructor(private utils: UtilsService) {
    this.targetValue = this.utils.random(1, 127);
  }

  ngOnInit(): void {
    this.ticToc();
  }

  ticToc(): void {
    if(this.light > 0) this.light --;
    this.updateState();

    let randomTime: number = this.utils.random(14000, 16000);
    console.log(randomTime)
    setTimeout(() => this.ticToc(), randomTime);
  }

  onClick(index: number): void {
    // Activate button
    this.buttonActivated[index] = !this.buttonActivated[index];
    if(this.buttonActivated[index]) this.currentValue += this.buttonValue[index];
    else this.currentValue -= this.buttonValue[index];

    // Check if matches
    if(this.currentValue === this.targetValue) {
      this.targetValue = this.utils.random(1, 127);
      this.buttonActivated = [false, false, false, false, false, false, false];
      this.currentValue = 0;
      if(this.light < 5) this.light ++;
      this.updateState();
    }
  }

  updateState(): void {
    let oldState: ModuleStates = this.state;
    if(this.light >= 4) this.state = "max";
    else if(this.light >= 2) this.state = "min";
    else this.state = "off";

    if(oldState !== this.state) this.updateStateEmitter.emit({"name": "binary", "state": this.state});
  }

}
