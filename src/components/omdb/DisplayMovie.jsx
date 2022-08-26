import { useNavigate } from 'react-router-dom';

function DisplayMovie({
  id, title, rated, year,
}) {
  const navigate = useNavigate();
  return (
    <li>
      {title}
      
      {rated}
      ,&nbsp;
      {year}
      &nbsp;&nbsp;
      <button   type="button" onClick={() => navigate(`/movie_request/${id}`)}>Details</button>
    </li>
  );
}

export default DisplayMovie;