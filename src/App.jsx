import Routers from './service/routes'
import Cursor from './components/animatedCursor'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <>
     <DndProvider backend={HTML5Backend}>
        <Routers />
        <Cursor />
     </DndProvider>
    </>
  )
}

export default App
