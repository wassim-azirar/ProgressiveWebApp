import { TastingRating } from './tastingRating';
import { PlaceLocation } from './placeLocation';

export class Coffee {
  _id: string;
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(
    public name: string = '',
    public place: string = '',
    public location: PlaceLocation = null
  ) {
    this.location = new PlaceLocation();
    this.tastingRating = new TastingRating();
  }
}
