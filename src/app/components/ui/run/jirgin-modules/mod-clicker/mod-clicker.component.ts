import { Component, EventEmitter, Output } from '@angular/core';
import { Module } from 'src/app/models/module.model';
import { ModuleNames } from 'src/app/types/module-names.type';
import { ModuleStates } from 'src/app/types/module-states.type';

@Component({
  selector: 'app-mod-clicker',
  templateUrl: './mod-clicker.component.html',
  styleUrls: ['./mod-clicker.component.scss']
})
export class ModClickerComponent {

  name: ModuleNames = "cliker";
  state: ModuleStates = "off";

  value: number = 0;

  @Output() updateStateEmitter: EventEmitter<Module> = new EventEmitter();

  ngOnInit(): void {
    this.ticToc();
  }

  onClick(): void {
    if(this.value < 100) this.value ++;
    this.updateState();
  }

  ticToc(): void {
    if(this.value > 0) this.value --;
    this.updateState();
    setTimeout(() => this.ticToc(), 1000);
  }

  updateState(): void {
    let oldState: ModuleStates = this.state;
    if(this.value >= 70) this.state = "max";
    else if(this.value >= 50) this.state = "min"
    else this.state = "off";

    if(oldState !== this.state)  this.updateStateEmitter.emit({"name": this.name, "state": this.state});
  }

}
