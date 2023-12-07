import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(false);

  const onClick = () => setToggle(prev => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100);
  })

  return (
    <div>
      <h1 data-testing="value-elem">{value}</h1>
      {toggle === true && <div data-testid='toggle-elem'>toggle</div>} {/*data-testid for get element by id */}
      {data && <div style={{ color: 'red' }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid='toggle-btn' onClick={onClick}>bttn</button>{/*data-testid for get element by id */}
      <input onChange={e => setValue(e.target.value)} type="text" placeholder="input value" />
    </div>
  );
}

export default App;
