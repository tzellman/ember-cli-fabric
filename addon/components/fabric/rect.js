import FabricObject from '../../lib/object';

export default class FabricRectComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Rect(this.options);
  }
}
