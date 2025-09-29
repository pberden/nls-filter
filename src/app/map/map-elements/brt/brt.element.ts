import { MapElementEnum } from './../map-element.enum';
import { BrtSource } from './brt.source';
import { MapElement, MapElementConfig } from '@ndwnu/map';

export class BrtElement extends MapElement<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>) {
    super(config);
    this.sources = [new BrtSource(config)];
  }
}
