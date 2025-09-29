import { MapElementConfig, MapSource } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { SourceSpecification } from 'maplibre-gl';
import { FeedbackLayer } from './feedback-layer';
import { GeoJsonFeatures$ } from './feedback-model';

export class FeedbackSource extends MapSource<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>, feedbackFeatures$: GeoJsonFeatures$) {
    super('feedback', config);

    this.featureCollection$ = feedbackFeatures$;
    this.layers = [new FeedbackLayer(config, this.id)];
  }

  protected getSpecification(): Partial<SourceSpecification> {
    return {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
    } as Partial<SourceSpecification>;
  }
}
