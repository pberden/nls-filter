import { MapLayer } from '@ndwnu/map';
import { MapElementEnum } from '../map-element.enum';
import { LayerSpecification } from 'maplibre-gl';

export class MunicipalityFill extends MapLayer<MapElementEnum> {
  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      source: this.sourceId,
      'source-layer': 'gemeentegebied',
      type: 'fill',
      paint: {
        'fill-color': [
          'case',
          ['==', ['get', 'identificatie'], 'GM0344'],
          'red',
          'rgb(245, 245, 245)',
        ],
        'fill-opacity': 0.5,
      },
    };
  }
}
