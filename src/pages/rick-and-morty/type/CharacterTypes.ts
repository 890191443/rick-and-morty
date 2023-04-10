export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: Location;
  location: Location;
  image: string;
  episode?: Episode[];
  created: string;
};

export type Location = {
  id: string | null;
  name: string | null;
  type?: string | null;
  dimension?: string | null;
  created?: string | null;
};

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
};

export type Characters = {
  data: {
    characters: {
      info: {
        count: number;
      };
      results: Character[];
    };
  };
};

export type Info = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};
export type StatusIconProps = {
  status: "alive" | "dead" | "unknown";
};
