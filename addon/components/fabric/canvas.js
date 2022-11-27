import Component from '@glimmer/component';
import { fabric } from 'fabric';

export default class FabricCanvasComponent extends Component {
  initialize (element) {
    this._canvas = new fabric.Canvas (element);
  }
}
