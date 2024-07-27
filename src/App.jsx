
import './App.css'
import Footer from './components/Footer';
import GetList from './components/GetList';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GetList />
      </main>
      <Footer />
    </div>
  );
}

export default App
