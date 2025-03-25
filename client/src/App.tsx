import './App.css'
import { useQuery } from '@apollo/client'
import { GET_ALL_CARTOONS } from './schemas/cartoon.schema'

function App() {
  const { loading, error, data } = useQuery(GET_ALL_CARTOONS);

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;

  return (
    <>
      <h1>Mon app de Cartoons</h1>
      {console.log(data)}
    </>
  )
}

export default App
