import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'app-stable-track',
  templateUrl: './stable-track.component.html',
  styleUrls: ['./stable-track.component.scss']
})
export class StableTrackComponent {

  @Input() tracks!: Track[];
  
  @Output() selectedTrackEmitter: EventEmitter<Track> = new EventEmitter();

  selectTrack(track: Track): void {
    this.selectedTrackEmitter.emit(track);
  }
}
