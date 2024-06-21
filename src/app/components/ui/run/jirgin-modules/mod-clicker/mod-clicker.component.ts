import { Component, EventEmitter, Output } from '@angular/core';
import { Module } from 'src/app/models/module.model';
import { UtilsService } from 'src/app/shared/utils.service';
import { ModuleNames } from 'src/app/types/module-names.type';
import { ModuleStates } from 'src/app/types/module-states.type';

@Component({
  selector: 'app-mod-clicker',
  templateUrl: './mod-clicker.component.html',
  styleUrls: ['./mod-clicker.component.scss', '../../../../../pages/run-page/run-page.component.scss']
})
export class ModClickerComponent {

  name: ModuleNames = "clicker";
  state: ModuleStates = "off";

  value: number = 50;

  @Output() updateStateEmitter: EventEmitter<Module> = new EventEmitter();

  constructor(private utils: UtilsService) {}

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

    let randomTime: number = this.utils.random(1500, 2000);
    setTimeout(() => this.ticToc(), randomTime);
  }

  updateState(): void {
    let oldState: ModuleStates = this.state;
    if(this.value >= 70) this.state = "max";
    else if(this.value >= 50) this.state = "min"
    else this.state = "off";

    if(oldState !== this.state) this.updateStateEmitter.emit({"name": this.name, "state": this.state});
  }

}
