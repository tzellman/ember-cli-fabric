import Component from '@glimmer/component';
import { fabric } from "fabric";

export default class FabricStaticCanvasComponent extends Component {
  initialize (element) {
    this._canvas = new fabric.StaticCanvas (element);
  }
}
