import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import DetailView from './components/product/DetailView'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TemplateProvider } from './templates/TemplateProvider'
import ContextProvider from './context/ContextProvider'
import { Box } from '@material-ui/core'
import Footer from './components/footer/Footer';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: '54px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={DetailView} />
            </Switch>
          </Box>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
