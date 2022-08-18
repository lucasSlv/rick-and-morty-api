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
        <ul>
          <li>
            {rickAndMorty.name}
          </li>
          <l1>
            {rickAndMorty.status}
          </l1>
        </ul>
      )
      
      
      
};