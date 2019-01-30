import { PLATFORM } from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  //config.globalResources([]);
  config.globalResources(PLATFORM.moduleName('./elements/loading-indicator'));
}
