export interface PlaceListViewPlace {
  title: string;
  description: string;
  link: string;
  category: string;
  address: string;
}

export interface PlaceListView {
  count: number;
  places: PlaceListViewPlace[];
}
