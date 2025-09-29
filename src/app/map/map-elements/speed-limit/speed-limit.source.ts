import { MapElementConfig, MapSource } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { SourceSpecification } from 'maplibre-gl';
import { SpeedLimitLayer } from './speed-limit.layer';
import { RoadSectionRepository } from './road-section.repository';

export class SpeedLimitSource extends MapSource<MapElementEnum> {
  constructor(
    config: MapElementConfig<MapElementEnum>,
    protected readonly sourceId: string,
    protected readonly roadSectionRepository: RoadSectionRepository,
  ) {
    super('speed-limit', config);

    this.layers = [new SpeedLimitLayer(config, this.id)];

    roadSectionRepository.roadSections$.subscribe((roadSections) => {
      if (roadSections) {
        this.config.map.setFilter(this.id, ['in', ['get', 'nwbRoadSectionId'], ['literal', Array.from(roadSections)]]);
      } else {
        this.config.map.setFilter(this.id, null);
      }
    });
  }

  protected getSpecification(): Partial<SourceSpecification> {
    return {
      type: 'vector',
      tiles: [
        'https://maps.ndw.nu/api/v1/wkdSpeedLimits/latest/mbtiles/segments/tiles/{z}/{x}/{y}.pbf',
      ],
    };
  }
}
