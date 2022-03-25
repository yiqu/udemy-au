export interface HomeState {
  title?: Title;
  loading: boolean;
  address?: {
    zip?: number;
  }
}

export interface Title {
  display: string;
  id: string;
  user?: {
    name: string;
    id: number;
  },
  names: string[];
  address: {
    zip: number;
  }
}
