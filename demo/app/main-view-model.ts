import { Observable } from 'tns-core-modules/data/observable';
import { IbeaconPlugin } from 'nativescript-ibeacon-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private ibeaconPlugin: IbeaconPlugin;

  constructor() {
    super();

    this.ibeaconPlugin = new IbeaconPlugin();
    this.message = this.ibeaconPlugin.message;
  }
}
