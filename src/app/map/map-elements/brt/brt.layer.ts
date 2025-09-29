import { MapLayer } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { LayerSpecification } from 'maplibre-gl';

export class BrtLayer extends MapLayer<MapElementEnum> {
  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      type: 'raster',
      source: this.sourceId,
    };
  }
}
