import Service from '@ember/service';
import { isPresent } from '@ember/object';

export default class FabricService extends Service {
  constructor () {
    super (...arguments);

    Object.defineProperty(this, '_instances', {
      value: new WeakMap(),
      writable: false,
      configurable: false,
    });
  }

  registerCanvas(element, component) {
    if (this._instances.has (element)) {
      throw new Error ('The canvas has already been registered.');
    }

    // Add the element to the registry.
    this._instances.set (element, component);

    // Initialize the component.
    component.initialize (element);
  }

  unregisterCanvas (element) {
    this._instances.delete (element);
  }

  lookupCanvas (element) {
    const canvas = this._instances.get (element);

    if (isPresent (canvas)) {
      return canvas;
    }

    throw new Error ('The canvas for the element does not exist.')
  }
}
