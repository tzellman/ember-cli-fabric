import FabricObject from '../../lib/object';

export default class FabricPolygonComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Polygon (this.args.points, this.options);
  }
}
