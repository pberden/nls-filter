import { MapElementConfig, MapLayer } from '@ndwnu/map';
import { DataDrivenPropertyValueSpecification, LayerSpecification, Point } from 'maplibre-gl';
import { MapElementEnum } from '../map-element.enum';

export class NwbEmptyRoadLayer extends MapLayer<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>, sourceId: string
  ) {
    super(config, sourceId);
  }

  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      type: 'line',
      source: this.sourceId,
      'source-layer': 'roadSections',
      paint: {
        'line-color': '#AAA',
        'line-gap-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          1,
          15,
          8,
        ] as DataDrivenPropertyValueSpecification<number>,
        'line-width': 1,
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 12, 0, 16, 1],
      },
    };
  }
}
