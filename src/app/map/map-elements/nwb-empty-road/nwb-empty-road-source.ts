import { MapElementConfig, MapSource } from '@ndwnu/map';
import { NwbEmptyRoadLayer } from './nwb-empty-road-layer';
import { MapElementEnum } from '../map-element.enum';
import { SourceSpecification } from 'maplibre-gl';
import { RoadSectionRepository } from '../speed-limit/road-section.repository';

// This source is used to display roads that don't have a feature
export class NwbEmptyRoadSource extends MapSource<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>, roadSectionRepository: RoadSectionRepository) {
    super('empty-road', config);

    this.layers = [new NwbEmptyRoadLayer(config, this.id)];

    this.config.map.on('idle', () => {
      roadSectionRepository.setRoadSections(new Set(this.config.map.queryRenderedFeatures({ layers: [this.id] })
        .filter(feature => feature.properties && feature.properties['roadOperatorCode'] === '344')
        .map(feature => `${feature.properties['roadSectionId']}`)));
    });
  }

  protected getSpecification(): Partial<SourceSpecification> {
    return {
      type: 'vector',
      tiles: ['https://maps.ndw.nu/api/v1/nwb/latest/mbtiles/roadSections/tiles/{z}/{x}/{y}.pbf'],
    };
  }
}
