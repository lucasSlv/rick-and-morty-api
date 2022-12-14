import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRickAndMorty  } from "../services/rickAndMortyService";

export const CardRickAndMorty = () => {
    const [rickAndMorty, setRickAndMorty] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
          setIsLoading(true);
          try {
            const { data } = await getRickAndMorty(id);
            setRickAndMorty(data);
          } catch {
            setIsError(true);
          } finally {
            setIsLoading(false);
          }
        })();
      }, [id]);

      if (isError) {
        return <div>Ooops! Algo de errado aconteceu!</div>;
      }
    
      if (isLoading) {
        return <div>Carregando...</div>;
      }
    
      return (
        <div className="c-card">
          <ul>
            <li>
              Name:{rickAndMorty.name}
            </li>
            <l1>
              Status:{rickAndMorty.status}
            </l1>
            <li>
              Origem:{rickAndMorty.origin.name}
            </li>
          </ul>
          <img src={rickAndMorty.image} alt={rickAndMorty.name} />
        </div>
      );      
};