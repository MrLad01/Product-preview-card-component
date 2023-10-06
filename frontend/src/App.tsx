import productd from "./assets/image-product-desktop.jpg"
import productm from "./assets/image-product-mobile.jpg"
import cart from "./assets/icon-cart.svg"


function App() {
  const screen = window.innerWidth
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="lg:max-2xl:w-2/5 lg:max-2xl:h-2/3 grid lg:max-2xl:grid-cols-2 xs:max-lg:grid-rows-2 lg:max-2xl:shadow-xl">
        <img src={screen > 1000 ? productd : productm} alt="Gabrielle Essense eau de perfaum" className="rounded-s-xl lg:max-2xl:h-full object-cover" />
        <div className="bg-white rounded-e-xl grid px-4 py-6">
          <h3>PERFUME</h3>
          <h2 className="font-bold text-blue-700">Gabrielle Essence Eau De Parfum</h2>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex gap-2">
            <p>$149.99</p>
            <p>$169.99</p>
          </div>
          <button className="flex items-center justify-center"><img src={cart} alt=""  /> Add to Cart</button>
        </div>

      </div>
    </main>
  )
}

export default App
