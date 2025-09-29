import { MapElementConfig, MapSource } from '@ndwnu/map';
import { SourceSpecification } from 'maplibre-gl';
import { BrtLayer } from './brt.layer';
import { MapElementEnum } from './../map-element.enum';

export class BrtSource extends MapSource<MapElementEnum> {
  constructor(config: MapElementConfig<MapElementEnum>) {
    super('brt', config);

    this.layers = [new BrtLayer(config, this.id)];
  }

  protected getSpecification(): Partial<SourceSpecification> {
    return {
      type: 'raster',
      tiles: [
        'https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?layer=grijs&style=default&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix={z}&TileCol={x}&TileRow={y}',
      ],
      tileSize: 256,
    };
  }
}
