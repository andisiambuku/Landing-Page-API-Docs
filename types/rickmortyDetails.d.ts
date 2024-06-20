export type OriginLocation = {
    name: string;
    url: string;
};

export type RickMortyDetails = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocation;
    location: OriginLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
};