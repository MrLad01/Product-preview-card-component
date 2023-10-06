import product from "./assets/image-product-desktop.jpg"


function App() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="w-2/5 h-1/2 grid grid-cols-2">
        <div>
          <img src={product} alt="Gabrielle Essense eau de perfaum" className="object-contain rounded-s-xl" />
        </div>
        <div className="bg-black rounded-e-xl">
        <h1 className="text-center font-bold text-blue-700">Hello World!</h1>
        </div>

      </div>
    </main>
  )
}

export default App
