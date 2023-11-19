import {Boss} from './assets'

function App() {
  return (
    <nav className="navbar flex justify-center items-center md:bg-gradient-to-t from-[#bdc3c7] to-[#2c3e50] min-h-screen">
      <div className="relative flex flex-col lg:p-32 lg:w-1/2 justify-center bg-white gap-8 self-stretch md:shadow-md">
        <div className="flex  w-full px-48 gap-4 items-center">
          <h1 className="text-[17px] md:w-44 lg:w-auto line-clamp-1 md:text-xl lg:text-3xl uppercase font-bold border-b-2 border-emerald-400">Gestion de Note</h1>
        </div>
        <div className="flex flex-col gap-4 px-20 w-full">

          <div className="flex flex-col gap-10">

            <div className="flex flex-col gap-1 justify-start">
              <span className='font-medium'>Email</span>
              <div className="p-2 border border-slate-200 hover:border-emerald-400 rounded-md">
              <input type="email" placeholder="Please entre your email" className="p-2 w-full focus:outline-none placeholder:text-slate-500 placeholder:uppercase placeholder:text-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-1 justify-start">
              <span className='font-medium'>Password</span>
              <div className="p-2 border border-slate-200 hover:border-emerald-400 rounded-md">
              <input type="password" placeholder="Please entre your password" className="p-2 w-full placeholder:text-slate-500 placeholder:uppercase placeholder:text-sm focus:outline-none" />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 gap-4">
            <div className="flex justify-between items-center">
              <div className='flex items-center gap-1'>
              <input type="checkbox" className="" />
              <span className='text-sm font-light'>Me souvenirs</span> 
              </div>
              <p className="font-bold text-lg">Mot de passe oublier</p>
            </div>
            <a className="px-8 bg-black text-center text-white py-2 text-lg font-semibold uppercase rounded-md" href='./'>Login</a>
            <a className="py-2 px-0 border-2 text-center border-emerald-500 text-emerald-400 rounded-md uppercase text-lg font-semibold" href='./'>Se registrer</a>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2 md:flex justify-center hidden md:flex-col md:items-center shadow-md self-stretch">
        <img alt='' src={Boss} className='h-screen object-cover'/>
      </div>
    </nav>
  );
}

export default App;
