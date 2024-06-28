export type ApiResponse = {
  count: number;
  filters: Record<string, unknown>;
  competitions: Competition[];
};

type Competition = {
  id: number;
  area: Area;
  name: string;
  code: string;
  type: string;
  emblem: string | null;
  plan: string;
  currentSeason: Season;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
};

type Area = {
  id: number;
  name: string;
  code: string;
  flag: string | null;
};

type Season = {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string | null;
};
