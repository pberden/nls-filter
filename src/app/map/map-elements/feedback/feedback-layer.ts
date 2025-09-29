import { MapLayer } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { LayerSpecification } from 'maplibre-gl';

export class FeedbackLayer extends MapLayer<MapElementEnum> {
  override onClick(event: unknown): void {
    console.log('Feedback.onClick', event);
  }

  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      type: 'circle',
      source: this.sourceId,
      layout: {
        visibility: 'none',
      },
      paint: {
        'circle-color': '#4893FF',
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 12, 4, 15, 8],
      },
    };
  }
}
