import { NavLink, Outlet } from 'react-router'

function App() {
  return (
    <div className='bg-slate-400 flex justify-start w-screen h-screen'>
      <nav className='w-60 bg-slate-200 h-full p-8 flex flex-col gap-2'>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/events" className="" end>
          Events
        </NavLink>
        <NavLink to="/items" end>
          Items
        </NavLink>
        <NavLink to="/transactions" end>
          Transactions
        </NavLink>
        <NavLink to="/expenses" end>
          Expenses
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App
