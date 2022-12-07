import Component from '@glimmer/component';
import { A } from '@ember/array';
import { isPresent } from '@ember/utils';

export default class BaseCanvas extends Component {
  constructor() {
    super(...arguments);

    // This is a collection of objects to add to the canvas.
    Object.defineProperty(this, 'objects', {
      value: A(),
      writable: false,
      configurable: false,
    });
  }

  /**
   * Initialize the canvas object by creating a new one attached to the provided
   * canvas HTML element.
   *
   * @param element
   */
  initialize(element) {
    console.log('initializing the canvas element');

    // Direct the subclass to create the canvas object.

    this._canvas = this.createCanvas(element, this.options);

    if (isPresent(this.args.height)) {
      this._canvas.setHeight(this.args.height);
    }

    if (isPresent(this.args.width)) {
      this._canvas.setWidth(this.args.width);
    }

    // Add each of the objects we have created to the canvas. This is necessary
    // because the objects are registered with this canvas component before the
    // component is notified before the HTML element has been inserted.

    this.objects.forEach((object) => {
      console.log(`[canvas]: adding ${object.label}`, object.object);
      this._canvas.add(object.object);
    });
  }

  get options() {
    return {
      backgroundColor: this.args.backgroundColor,
    };
  }

  /**
   * Add an object the canvas.
   * *
   * @param object
   */
  add(object) {
    if (this.objects.includes(object)) {
      throw new Error('The object has already been added to the canvas.');
    }

    // Add the object component to the collection, and then add the Fabric
    // object to the canvas.
    this.objects.push(object);

    if (isPresent(this._canvas)) {
      console.log(`[canvas]: adding ${object.label}`, object.object);

      this._canvas.add(object.object);
    }
  }

  /**
   * Remove an object from the canvas.
   *
   * @param object
   */
  remove(object) {
    if (!this.objects.includes(object)) {
      throw new Error('The object does not belong to this canvas.');
    }

    // Remove the object from the canvas.
    this._canvas.remove(object.object);
  }
}
