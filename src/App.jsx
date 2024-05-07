import './App.css'
import Row from './components/Row'
import requests from './request'
import Cover from './components/Cover'
import Nav from './components/Nav'


function App() {


  return (
    <>
      <Nav/>
      <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster='true' title ='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title ='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title ='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title ='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title ='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title ='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </>
  )
}

export default App
