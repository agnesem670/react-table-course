import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';

function App() {
  return (
    <div className="App">
      <FilteringTable />
      {/* <SortingTable /> */}
      {/* <BasicTable /> */}
    </div>
  );
}

export default App;
