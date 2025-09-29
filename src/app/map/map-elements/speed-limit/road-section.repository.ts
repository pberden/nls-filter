import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoadSectionRepository {
  #roadSections$ = new BehaviorSubject<Set<string> | null>(null);

  roadSections$ = this.#roadSections$.asObservable();

  setRoadSections(roadSections: Set<string>) {
    this.#roadSections$.next(roadSections);
  }
  
  clear() {
    this.#roadSections$.next(null);
  }

}