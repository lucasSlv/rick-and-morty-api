import { Route, Routes} from "react-router-dom";
import { RickAndMortyList } from "../components/rickAndMortyList"
import { CardRickAndMorty } from "../components/cardRickAndMorty";

export const Routers = () => {
    return (
    <Routes>
        <Route path="/" element={<RickAndMortyList />} />
        <Route path="character/:id" element={<CardRickAndMorty />} />
    </Routes>
    );
};