import HomeContent from './HomeContent'

export function Home(props) {
  return (
    <>
      <h1>{props.nomePagina}</h1>
       <HomeContent/>
    </>
  )
}
