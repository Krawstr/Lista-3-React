import './App.css'
import RenderLista from './components/RenderLista.jsx'
import ComponentePai from './components/PaieFilho.jsx'
import Invisible from './components/Invisible.jsx'
import Lista from './components/Lista.jsx'
import ListaIMGS from './components/ListaIMGS.jsx'
import DynamicStyledParagraph from './components/MudarCor.jsx'
import TaskList from './components/TaskList.jsx'
import Card from './components/Russo.jsx'
import Component from './components/Componentes.jsx'
import GaleriaImagens from './components/GaleriaImagens.jsx'


function App() {
  const images = [
    { url: 'https://http2.mlstatic.com/D_NQ_NP_955251-MLB48834112512_012022-O.webp', altText: 'Bastão Baseboll dialogo' },
    { url: 'https://yt3.googleusercontent.com/FSA44v5dG56FXl25kAuka8ceV5CtJa20l7oNhxpfMWSC_MDfrFWxG4GJFa3iRTWkfXDjfU8wt6Y=s900-c-k-c0x00ffffff-no-rj', altText: 'Filho do ricardo versão prime' },
    { url: 'https://1.bp.blogspot.com/-RKRK6ih6hR8/XSoF6_rQg7I/AAAAAAAAHVY/iaxs1s2KkxY3TZviFRhhcS_Yj3QCAk0dQCLcBGAs/s1600/Hulk-Lou-Ferrigno.jpg', altText: 'Hulk todo esquisito' }
  ];


  return (
    <>
      <RenderLista />
      <ComponentePai />
      <Invisible visible={false} />
      <Lista />
      <ListaIMGS />
      <DynamicStyledParagraph isHighlighted={true} text="Este parágrafo está destacado!" />
      <DynamicStyledParagraph isHighlighted={false} text="Este parágrafo não está destacado." />
      <TaskList />
      <Card>
        <h1 style={{ color: 'red' }}>Olá</h1>
      </Card>
      <Component />
      <GaleriaImagens images={images} />
    </>
  )
}

export default App
