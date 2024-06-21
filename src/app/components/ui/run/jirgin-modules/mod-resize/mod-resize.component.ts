import { Component, EventEmitter, Output } from '@angular/core';
import { Module } from 'src/app/models/module.model';
import { UtilsService } from 'src/app/shared/utils.service';
import { ModuleNames } from 'src/app/types/module-names.type';
import { ModuleStates } from 'src/app/types/module-states.type';

@Component({
  selector: 'app-mod-resize',
  templateUrl: './mod-resize.component.html',
  styleUrls: ['./mod-resize.component.scss', '../../../../../pages/run-page/run-page.component.scss']
})
export class ModResizeComponent {

  name: ModuleNames = "resize";
  state: ModuleStates = "off";

  @Output() updateStateEmitter: EventEmitter<Module> = new EventEmitter();

  targetSize: number[] = [50, 120];
  stoppedSize: number[] = [30, 30];

  perfectTolerance: number = 5;
  outterTolerance: number = 20;

  constructor(private utils: UtilsService) {}

  ngOnInit(): void {
    this.ticTac();
  }

  ticTac(): void {
    this.targetSize = [this.utils.random(30, 270), this.utils.random(30, 270)];
    this.updateState();

    let randomTime: number = this.utils.random(13000, 14000);
    setTimeout(() => this.ticTac(), randomTime);
  }

  updateState(): void {
    if((this.stoppedSize[0] >= this.targetSize[0] && this.stoppedSize[0] <= this.targetSize[0]+this.perfectTolerance) && (this.stoppedSize[1] >= this.targetSize[1] && this.stoppedSize[1] <= this.targetSize[1]+this.perfectTolerance)) this.state = "max";
    else if((this.stoppedSize[0] >= this.targetSize[0]-this.outterTolerance && this.stoppedSize[0] <= this.targetSize[0]+this.outterTolerance) && (this.stoppedSize[1] >= this.targetSize[1]-this.outterTolerance && this.stoppedSize[1] <= this.targetSize[1]+this.outterTolerance)) this.state = "min";
    else this.state = "off";

    this.updateStateEmitter.emit({"name": "resize", "state": this.state});
  }

  onResize(mouse: any): void {
    let w: string = mouse.target.style.width.slice(0, -2);
    let h: string = mouse.target.style.height.slice(0, -2);
    this.stoppedSize = [parseInt(w), parseInt(h)];
    this.updateState();
  }

}
