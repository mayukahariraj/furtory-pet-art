import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <div className="flex flex-col gap-4 mb-4 mx-8">
        <p className="font-bold text-blue-500 text-lg">
          404 error
        </p>
        <h1 className="font-bold text-4xl">
          We can't find that page
        </h1>
        <p className="font-normal text-xl text-slate-500">
          Sorry, the page you are looking for doesn't exist or has been moved
        </p>
        </div>

        <div className="mx-8">
        <button class="rounded-lg text-xl mr-4 px-7 py-2 text-gray-400 border-gray-300 border-2 ">Go back
        </button>
        <button class="rounded-lg text-xl bg-blue-500 px-5 py-2 text-white ">Take me home
        </button>
        </div>
         </header>
       </div>
   );
}

export default App;
