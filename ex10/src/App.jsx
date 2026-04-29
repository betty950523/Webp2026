function App() {

  const styleArgument = {
    fontSize: '100px',
    color: 'red'
  };

  const changeText = (event) => {
    event.target.innerText = event.target.innerText + "被點了";
  };

  return (
    <div>
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;