import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';

function App() {
  return (
    <div className="App">
      <RowSelection />
      {/* <PaginationTable /> */}
      {/* <FilteringTable /> */}
      {/* <SortingTable /> */}
      {/* <BasicTable /> */}
    </div>
  );
}

export default App;
