import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
import TestImage from './assets/images/testImage.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>{count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          + count
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          - count
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <ImageGrid /> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='imgCenter'>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
        <img style={{justifySelf: 'center'}} src={TestImage} alt="test image" width={450} height={100}/>
      </div>
      <button><img src={TestImage} alt="test image" width={450} height={100}/></button>
      
    </>
  )
}

export default App
