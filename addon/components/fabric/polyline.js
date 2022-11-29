import FabricObject from '../../lib/object';

export default class FabricPolylineComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Polyline(this.args.points, this.options);
  }
}
