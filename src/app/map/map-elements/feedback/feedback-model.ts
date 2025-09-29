import { Observable } from 'rxjs';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';

/**
 * Observable that emits GeoJSON FeatureCollection data
 */
export type GeoJsonFeatures$ = Observable<FeatureCollection<Geometry, GeoJsonProperties>>;
