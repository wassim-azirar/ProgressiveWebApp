import { TastingRating } from './tastingRating';
import { PlaceLocation } from './placeLocation';

export class Coffee {
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(
    public name: string,
    public place: string,
    public location: PlaceLocation
  ) {}
}
