import './App.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const styleArgument = {
  fontSize: '100px',
  color: 'red',
};

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument}>hello CGU!!</h1>

      <IconButton color="primary" aria-label="cart">
        <AddShoppingCartIcon />
      </IconButton>

      <IconButton color="primary" aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <IconButton color="primary" aria-label="alarm">
        <AlarmIcon />
      </IconButton>
    </div>
  );
}

export default App;