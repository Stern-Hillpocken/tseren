export class Module {
    constructor(
        public name: string,
        public state: "off" | "min" | "max"
    ) {}
}