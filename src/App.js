
import Company from './components/company';
import Customers from './components/customers';
import Main from './components/main';
import Posts from './components/posts';
import Presentations from './components/presentations';
import Testimonial from './components/testimonial';
import Brands from './components/brands';
import Trial from './components/trial';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Main/>
      <Presentations/>
      <Company/>
      <Posts />
      <Customers/>
      <Testimonial/>
      <Brands/>
      <Trial/>
      <Footer/>
    </div>
  );
}

export default App;
