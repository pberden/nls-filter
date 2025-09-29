import { Map } from 'maplibre-gl';
import { BrtElement } from './brt/brt.element';
import { inject, Injectable } from '@angular/core';
import { MapElementRepository, MaplibreCursorService } from '@ndwnu/map';
import { SpeedLimitElement } from './speed-limit/speed-limit.element';
import { MapElementEnum } from './map-element.enum';
import { FeedbackElement } from './feedback/feedback-element';
import { of } from 'rxjs';
import { GeoJsonFeatures$ } from './feedback/feedback-model';
import { AdministrativeDivisionElement } from './administrative-division/administrative-division.element';

// mock data for feedback features
// this should be replaced with a real data source in a real application
const feedbackFeatures$ = of({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [5.152743124330041, 52.09374629570776],
      },
      id: '2c996e16-e847-4abc-ac5e-d4ca45c0111a',
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [5.15224950778912, 52.092375263556555],
      },
      id: '4a75d42f-d3f2-4618-9b6c-739e532345f7',
    },
  ],
}) as GeoJsonFeatures$;

@Injectable({ providedIn: 'root' })
export class PlaygroundMapElementRepository extends MapElementRepository<MapElementEnum> {
  readonly #maplibreCursorService = inject(MaplibreCursorService);

  registerMapElements(map: Map) {
    const mapElementConfig = {
      map,
      mapElementRepository: this,
      maplibreCursorService: this.#maplibreCursorService,
    };

    [
      new BrtElement({ ...mapElementConfig, elementId: MapElementEnum.BRT, elementOrder: 0 }),
      new AdministrativeDivisionElement({
        ...mapElementConfig,
        elementId: MapElementEnum.AdministrativeDivison,
        elementOrder: 5,
      }),
      new SpeedLimitElement({
        ...mapElementConfig,
        elementId: MapElementEnum.SpeedLimit,
        elementOrder: 10,
      }),
      new FeedbackElement(
        {
          ...mapElementConfig,
          elementId: MapElementEnum.Feedback,
          elementOrder: 20,
        },
        feedbackFeatures$,
      ),
    ].forEach((element) => this.addMapElement(element));
  }
}
