import { Route, Routes} from "react-router-dom";
import { RickAndMorty } from "../pages/rickAndMOrty";
import { CardRickAndMorty } from "../components/cardRickAndMorty";

export const Routers = () => {
    return (
    <Routes>
        <Route path="/" element={<RickAndMorty />} />
        <Route path="rickAndMorty/:id" element={<CardRickAndMorty />} />
    </Routes>
    );
};