import { Observable } from "tns-core-modules/data/observable";
import { Ibeacon } from "nativescript-ibeacon";

export class HelloWorldModel extends Observable {
    public message: string;
    private ibeacon: Ibeacon;

    constructor() {
        super();

        this.ibeacon = new Ibeacon();
        this.message = this.ibeacon.message;
    }
}
