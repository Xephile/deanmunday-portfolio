import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CardServicing from './components/Projects/ProjectItems/CardServicing';
import urls from './routes/routes.urls';


const App = () => {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path={urls.HOME} element={<Home />} />
        <Route path={urls.CARD_SERVICING} element={<CardServicing />} />
        <Route path={urls.TEMP_ROUTE} element={<CardServicing />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
