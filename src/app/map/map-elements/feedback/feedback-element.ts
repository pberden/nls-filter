import { MapElement, MapElementConfig } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { FeedbackSource } from './feedback-source';
import { GeoJsonFeatures$ } from './feedback-model';

export class FeedbackElement extends MapElement<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>, feedbackFeatures$: GeoJsonFeatures$) {
    super(config);

    this.sources = [new FeedbackSource(config, feedbackFeatures$)];
  }
}
