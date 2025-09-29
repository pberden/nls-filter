import { MapLayer } from '@ndwnu/map';
import { MapElementEnum } from './../map-element.enum';
import { LayerSpecification } from 'maplibre-gl';

export class SpeedLimitLayer extends MapLayer<MapElementEnum> {
  override onClick(event: unknown): void {
    console.log('SpeedLimitLayer.onClick', event);
  }

  protected getSpecification(): Partial<LayerSpecification> {
    return {
      id: this.id,
      source: this.sourceId,
      'source-layer': 'segments',
      type: 'line',
      minzoom: 12,
      layout: {
        'line-cap': 'round',
        'line-join': 'bevel',
      },
      paint: {
        'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 15, 8],
        'line-opacity': 0.75,
        'line-color': [
          'case',
          ['==', ['get', 'speedLimit'], '5'],
          '#83ABCC',
          ['==', ['get', 'speedLimit'], '15'],
          '#E88D85',
          ['==', ['get', 'speedLimit'], '20'],
          '#47FFB5',
          ['==', ['get', 'speedLimit'], '30'],
          '#D8AEE8',
          ['==', ['get', 'speedLimit'], '40'],
          '#83ABCC',
          ['==', ['get', 'speedLimit'], '50'],
          '#FF9D54',
          ['==', ['get', 'speedLimit'], '60'],
          '#E240E8',
          ['==', ['get', 'speedLimit'], '70'],
          '#8EBF98',
          ['==', ['get', 'speedLimit'], '80'],
          '#4893FF',
          ['==', ['get', 'speedLimit'], '90'],
          '#E39877',
          ['==', ['get', 'speedLimit'], '100'],
          '#E8E648',
          ['==', ['get', 'speedLimit'], '120'],
          '#83ABCC',
          ['==', ['get', 'speedLimit'], '130'],
          '#AA61CD',
          ['==', ['get', 'speedLimit'], 'NOA'],
          '#F0F0F0',
          ['==', ['get', 'speedLimit'], 'NVT'],
          '#C8C8C8',
          ['==', ['get', 'speedLimit'], 'unknown'],
          '#414141',
          '#666666',
        ],
        'line-offset': [
          'interpolate',
          ['linear'],
          ['zoom'],
          12,
          [
            'case',
            ['==', ['get', 'dataDirection'], 'H'],
            1.5,
            ['==', ['get', 'dataDirection'], 'T'],
            -1.5,
            0,
          ],
          15,
          [
            'case',
            ['==', ['get', 'dataDirection'], 'H'],
            4.5,
            ['==', ['get', 'dataDirection'], 'T'],
            -4.5,
            0,
          ],
        ],
      },
    };
  }
}
