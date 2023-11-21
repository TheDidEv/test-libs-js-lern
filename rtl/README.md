# There we lern react testing librari
for start we need import lib and file witch we will be testing on our example we will test commponents from App.js
```
import { render, screen } from '@testing-library/react';
import App from './App';
```
then in our code we can start testin commponent

```
test('renders learn react link', () => {
  render(<App />);
  const hellowWorldElem = screen.getByText(/Hello world/i);// //...//i - регулярний вираз який означає що ми ігноруємо регістр(<h1>, <div>, ...)
  expect(hellowWorldElem).toBeInTheDocument();//toBeInTheDocument - перевіряє чи з'явилось в dom дереві

  const bttnElem = screen.getByRole('button');//getByRole - перевіряє чи є такий елемент
  expect(bttnElem).toMatchSnapshot();//toMatchSnapshot - робить snapshot

  // const inputElem = screen.getByPlaceholderText(/input value/i);
  // expect(inputElem) = screen.toBeInTheDocument();

  // screen.debug();//повертає розмітку
});
```

In comment up we can see ```toMatchSnapshot``` - A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

App.js file
```
function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <button>bttn</button>
      <input type="text" placeholder="input value" />
    </div>
  );
}

export default App;
```

for start testin unput in console 
```npm start test```