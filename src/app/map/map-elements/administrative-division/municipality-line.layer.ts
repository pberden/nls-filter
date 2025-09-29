import { MapLayer } from '@ndwnu/map';
import { MapElementEnum } from '../map-element.enum';
import { LayerSpecification } from 'maplibre-gl';

export class MunicipalityLine extends MapLayer<MapElementEnum> {
  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      source: this.sourceId,
      'source-layer': 'gemeentegebied',
      type: 'line',
      paint: {
        'line-color': 'rgb(140, 140, 140)',
        'line-width': 1,
      },
    };
  }
}
