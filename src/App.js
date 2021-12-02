import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        { Array(10).fill().map((_, index) => (
          <Card key={index} />
        )) }
      </div>
    </div>
  );
}

export default App;
