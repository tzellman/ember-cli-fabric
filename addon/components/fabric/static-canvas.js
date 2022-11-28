import BaseCanvas from '../../lib/base-canvas';
import { fabric } from 'fabric';

export default class FabricCanvasComponent extends BaseCanvas {
  createCanvas(element) {
    return new fabric.StaticCanvas(element);
  }
}
