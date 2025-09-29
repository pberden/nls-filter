import { MapElementConfig, MapSource } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { SourceSpecification } from 'maplibre-gl';
import { SpeedLimitLayer } from './speed-limit.layer';

export class SpeedLimitSource extends MapSource<MapElementEnum> {
  constructor(
    config: MapElementConfig<MapElementEnum>,
    protected readonly sourceId: string,
  ) {
    super('speed-limit', config);

    this.layers = [new SpeedLimitLayer(config, this.id)];
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
