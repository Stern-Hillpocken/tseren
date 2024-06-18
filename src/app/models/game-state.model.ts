import { Jirgin } from "./jirgin.model";
import { Opponent } from "./opponent.model";
import { Settings } from "./settings.model";
import { Track } from "./track.model";

export class GameState {
    constructor(
        public jirgin: Jirgin,
        public opponent: Opponent,
        public track: Track,
        public settings: Settings
    ) {}
}