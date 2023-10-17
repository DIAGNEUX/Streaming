import { useParams } from 'react-router-dom';
import Films from '../data/data';

function Details() {
  const { filmTitre } = useParams();
  const film = Films[filmTitre];

  return (
    <div>
      <h1>{film.titre}</h1>
      
    </div>
  );
}

export default Details;


