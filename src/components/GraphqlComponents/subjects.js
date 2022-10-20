import { useQuery, gql } from '@apollo/client';

const GET_SUBJECT_CODE = gql`
  query($code: String!){
        getSubjectByCode(code: $code){
            name
            campus
            faculty
            credits
            content
        }
    }`;

function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_SUBJECT_CODE, { variables: { "code":"2024149" }, });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}