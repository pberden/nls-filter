import { MapElement, MapElementConfig } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { SpeedLimitSource } from './speed-limit.source';
import { NwbEmptyRoadSource } from '../nwb-empty-road/nwb-empty-road-source';

export class SpeedLimitElement extends MapElement<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>) {
    super(config);
    this.sources = [
      new SpeedLimitSource(config, this.id),
      new NwbEmptyRoadSource(config),
    ];
  }
}
