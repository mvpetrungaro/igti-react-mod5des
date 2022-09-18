import { IconContext } from 'react-icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: 'middle' },
      }}
    >
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <header className="flex justify-center items-center bg-blue-500 h-16">
            <h1 className="text-2xl font-bold text-white">React Module 5</h1>
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <footer className="flex justify-center items-center bg-blue-500 h-10">
            <h4 className="text-md font-bold text-white">IGTI</h4>
          </footer>
        </div>
      </BrowserRouter>
    </IconContext.Provider>
  )
}
