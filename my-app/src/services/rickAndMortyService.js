import { rickAndMortyApi } from "./rickAndMortyApi";

export const getRickAndMorty = (id) => {
    return rickAndMortyApi.get(`/character/${id}`);
}