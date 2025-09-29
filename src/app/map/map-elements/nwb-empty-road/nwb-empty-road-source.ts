import { MapElementConfig, MapSource } from '@ndwnu/map';
import { NwbEmptyRoadLayer } from './nwb-empty-road-layer';
import { MapElementEnum } from '../map-element.enum';
import { SourceSpecification } from 'maplibre-gl';

// This source is used to display roads that don't have a feature
export class NwbEmptyRoadSource extends MapSource<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>) {
    super('empty-road', config);

    this.layers = [new NwbEmptyRoadLayer(config, this.id)];
  }

  protected getSpecification(): Partial<SourceSpecification> {
    return {
      type: 'vector',
      tiles: ['https://maps.ndw.nu/api/v1/nwb/latest/mbtiles/roadSections/{z}/{x}/{y}.pbf'],
    };
  }
}
