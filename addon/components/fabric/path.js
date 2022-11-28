import FabricObject from '../../lib/object';

export default class FabricPathComponent extends FabricObject {
  createObject(fabric) {
    const path = new fabric.Path(this.args.path);
    path.set (this.options);

    return path;
  }
}
