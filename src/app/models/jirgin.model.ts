import { Module } from "./module.model";

export class Jirgin {
    constructor(
        public name: string,
        public modules: Module[],
        public progress: number
    ) {}
}