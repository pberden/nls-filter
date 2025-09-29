import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { PlaygroundMapElementRepository } from './map-elements/map-element.repository';
import { MapComponent, MapConfig } from '@ndwnu/map';
import { MapElementEnum } from './map-elements/map-element.enum';
import { map } from 'rxjs';

@Component({
  imports: [
  ],
  selector: 'app-map',
  styleUrl: './map.component.scss',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundMapComponent extends MapComponent {
  readonly #demoMapElementRepository = inject(PlaygroundMapElementRepository);

  override config = input<Partial<MapConfig>>({
    maxZoom: 20,
    minZoom: 6,
    dragRotate: true,
    zoom: 12,
  });

  mapElementIds$ = this.#demoMapElementRepository.mapElementIds$.pipe(
    map((ids) => [...ids].sort((a, b) => a.localeCompare(b))),
  );
  visibleMapElementIds$ = this.#demoMapElementRepository.visibleMapElementIds$;

  protected onRemoveMap() {
    this.#demoMapElementRepository.removeAllMapElements();
  }

  protected onIdle() {
    void 0;
  }

  protected onLoadMap() {
    this.#demoMapElementRepository.registerMapElements(this.map);
    this.#demoMapElementRepository.showMapElement(MapElementEnum.BRT);
    this.#demoMapElementRepository.showMapElement(MapElementEnum.SpeedLimit);
    this.#demoMapElementRepository.showMapElement(MapElementEnum.Feedback);
    this.map.jumpTo({ center: [5.152743124330041, 52.09374629570776], zoom: 15 }, { duration: 0 });
  }

  toggleMapElement(mapElementId: MapElementEnum) {
    this.#demoMapElementRepository.toggleMapElement(mapElementId);
  }
}
