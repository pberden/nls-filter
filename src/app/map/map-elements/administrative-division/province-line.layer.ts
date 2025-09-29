import { MapLayer } from '@ndwnu/map';
import { MapElementEnum } from '../map-element.enum';
import { LayerSpecification } from 'maplibre-gl';

export class ProvinceLine extends MapLayer<MapElementEnum> {
  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      source: this.sourceId,
      'source-layer': 'provinciegebied',
      type: 'line',
      paint: {
        'line-color': 'rgb(0, 0, 0)',
        'line-width': 2,
      },
    };
  }
}
