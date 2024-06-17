import  {Routes, Route }  from 'react-router-dom'
import  {Home}  from './Components/Home'
import  {Contact}  from './Components/Contact'
import  Footer  from './Components/Footer'
import  Header  from './Components/Header'
import  Historia  from './Components/History'
import  Mission from './Components/Mission'
import  {Product} from './Components/Product'

function App() 
{

  return (
    <>
      <div>
        <Header />
      
        <Routes>

          <Route path="/" element={<Home 
          nomePagina='Pagina inicial' 
          detalhamentodaPagina='detalhamento pagina'/>} />

            <Route path= "/Mission" element={<Mission 
            nomePagina='pagina missao' 
            detalhamentodaPagina='detalhamento pagina'/>} />

            <Route path="/History" element={<Historia 
            nomeHistory='pagina historia' 
            detalhamentodaPagina='detalhamento history'/>} />

            <Route path="/Contact" element={<Contact />} />
            

            <Route path="/Product" element={<Product 
            nomeProduct='Product' 
            detalhamentodaPagina='detalhamento product'/>} />

            {/* <Route path="*"> element={<NoPage />} /> */}
        </Routes>

        <Footer anodeProducao='@2024'/>
      </div>
    </>

  )
}

export default App

