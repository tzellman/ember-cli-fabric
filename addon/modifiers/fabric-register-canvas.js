import Modifier from 'ember-modifier';

import { inject as service } from '@ember/service';
import { registerDestructor } from '@ember/destroyable';

function cleanup(instance) {
  instance.unregister();
}

export default class FabricRegisterCanvas extends Modifier {
  @service
  fabric;

  modify(element, [component]) {
    registerDestructor(this, cleanup);

    this.parentElement = element;
    this.fabric.registerCanvas(element, component);
  }

  unregister() {
    this.fabric.unregisterCanvas(this.parentElement);
  }
}
