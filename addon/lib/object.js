import Component from '@glimmer/component';
import { isNone } from '@ember/utils';
import { fabric } from 'fabric';

export default class FabricObject extends Component {
  constructor () {
    super (...arguments);

    if (isNone (this.canvas)) {
      throw new Error ('The Fabric object must set the canvas attribute.');
    }

    // Create the Fabric object.
    this._object = this.createObject (fabric);

    // Add the object to the canvas so it becomes part of its lifecycle.
    this.canvas.add (this);
  }

  get options () {
    return {
      left: this.args.left,
      top: this.args.top,
      right: this.args.right,
      bottom: this.args.bottom,
      fill: this.args.fill,
    };
  }

  willDestroy () {
    super.willDestroy ();

    // Remove this object from the canvas.
    this.canvas.remove (this);
  }

  get canvas () {
    return this.args.canvas;
  }

  get object () {
    return this._object;
  }
}
