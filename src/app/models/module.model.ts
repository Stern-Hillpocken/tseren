import { ModuleStates } from "../types/module-states.type";

export class Module {
    constructor(
        public name: string,
        public state: ModuleStates
    ) {}
}