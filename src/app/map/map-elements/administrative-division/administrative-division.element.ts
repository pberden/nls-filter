import { MapElement, MapElementConfig } from '@ndwnu/map';
import { MapElementEnum } from '../map-element.enum';
import { AdministrativeDivisonSource } from './administrative-division.source';

export class AdministrativeDivisionElement extends MapElement<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>) {
    super(config);
    this.sources = [new AdministrativeDivisonSource(config, this.id)];
  }
}
