
import './index.css'
import CleanUp from './components/hooks/useEffect/CleanUp'
import { HowNotToFetchApi } from './components/hooks/useEffect/HowNotToFetch'


const App = () => {

  return (
    <section className='parent_container'>
      <HowNotToFetchApi/>
    </section>
  )
}

export default App