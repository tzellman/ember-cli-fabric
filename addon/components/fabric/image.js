import FabricObject from '../../lib/object';
import { action } from '@ember/object';

export default class FabricImageComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Image(null, this.options);
  }

  @action
  didInsert(element) {
    element.onload = () => {
      // The image has loaded. We can update the Fabric object with the
      // element since it will now show correctly.

      this.object.setElement(element);
      this.object.canvas.renderAll();
    };
  }
}
