import Component from 'inferno-component';
import './registerServiceWorker';

import Navbar from './Navbar';

class App extends Component {
  render({ children }) {
    return (
      <main className="wrapper">
        <Navbar />
        <section className="container">
          {children}
        </section>
      </main>
    );
  }

}

class App extends Component {
app.post('/question/next', function (req, res) {
    var req=req+1;
    var url='/question/'+String(req)
    return res.redirect(url);
}); 
}
export default App;
