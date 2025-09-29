import { MapElementConfig, MapSource } from '@ndwnu/map';
import { MapElementEnum } from '../map-element.enum';
import { SourceSpecification } from 'maplibre-gl';
import { MunicipalityFill } from './municipality-fill';
import { MunicipalityLine } from './municipality-line.layer';
import { ProvinceLine } from './province-line.layer';

export class AdministrativeDivisonSource extends MapSource<MapElementEnum> {
  constructor(
    config: MapElementConfig<MapElementEnum>,
    protected readonly sourceId: string,
  ) {
    super('administrative-division', config);

    this.layers = [
      new MunicipalityFill(config, this.id, 'municipality-line'),
      new MunicipalityLine(config, this.id, 'municipality-fill'),
      new ProvinceLine(config, this.id, 'province-line'),
    ];
  }

  protected getSpecification(): Partial<SourceSpecification> {
    return {
      type: 'vector',
      tiles: [
        'https://api.pdok.nl/kadaster/bestuurlijkegebieden/ogc/v1/tiles/WebMercatorQuad/{z}/{y}/{x}?f=mvt',
      ],
    };
  }
}
