import React, { Suspense } from 'react'
const FrontendApp1 = React.lazy(() => import('frontend1/Frontend1App'));
const FrontendApp2 = React.lazy(() => import('frontend2/FrontendApp'));
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Container</h1>} />
        <Route path='/frontend1/*' element={<Suspense fallback={'loading'}>
          <FrontendApp1 />
        </Suspense>}>

        </Route>
        <Route path='/frontend2' element={<Suspense fallback={'loading'}>
          <FrontendApp2 />
        </Suspense>}/>
      </Routes>
    </Router>
  )
}

export default App