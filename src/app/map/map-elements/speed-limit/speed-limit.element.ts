import { MapElement, MapElementConfig } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { SpeedLimitSource } from './speed-limit.source';
import { NwbEmptyRoadSource } from '../nwb-empty-road/nwb-empty-road-source';
import { RoadSectionRepository } from './road-section.repository';

export class SpeedLimitElement extends MapElement<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>, roadSectionRepository: RoadSectionRepository) {
    super(config);
    this.sources = [
      new SpeedLimitSource(config, this.id, roadSectionRepository),
      new NwbEmptyRoadSource(config, roadSectionRepository),
    ];
  }
}
