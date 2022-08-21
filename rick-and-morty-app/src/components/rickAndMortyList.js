import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRickAndMorty } from "../services/rickAndMortyService";

export const RickAndMortyList = () => {
    const [listRickAndMorty, setListRickAndMorty] = useState([]);

    useEffect(() => {
        const generateRickAndMortyPromises = () =>
            Array(150)
            .fill()
            .map((_, index) => 
                getRickAndMorty(index + 1).then((response) => response.data)
            );

            const rickAndMortyPromises = generateRickAndMortyPromises();

            Promise.all(rickAndMortyPromises).then((rickAndMorty) => setListRickAndMorty(rickAndMorty));

    }, []);

    return (
        <ul>
            {listRickAndMorty.map((rickAndMorty) => (
                <li key={rickAndMorty.id}>
                    {rickAndMorty.name}
                    <Link to={`/character/${rickAndMorty.id}`}>Clique aqui</Link>
                </li>
            ))}
        </ul>
    );
};