import NeowsList from './components/neows-list/NeowsList';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { Typography } from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">
       <Typography variant="h4"
                   className="header-title">
                Near orbital objects (NEO)
        </Typography>
        <ErrorBoundary>
            <NeowsList/>  
        </ErrorBoundary>
          
   
      
    </div>
  );
}

export default App;
