import productd from "./assets/image-product-desktop.jpg"
import productm from "./assets/image-product-mobile.jpg"
import cart from "./assets/icon-cart.svg"


function App() {
  const screen = window.innerWidth
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-cream xs:max-lg:p-6 ">
      <div className="lg:max-2xl:w-2/5 xs:max-lg:w-full xs:max-lg:h-full lg:max-2xl:h-2/3 grid lg:max-2xl:grid-cols-2 xs:max-lg:grid-rows-2 lg:max-2xl:shadow-xl">
      <picture>
          <source
            srcSet={`${productd} 1x, ${productd} 2x`}
            media="(min-width: 1000px)"
          />
          <source srcSet={`${productm} 1x, ${productm} 2x`} />
          <img
            src={screen > 1000 ? productd : productm}
            alt="Gabrielle Essense eau de perfaum"
            className="lg:max-2xl:rounded-s-xl xs:max-lg:rounded-t-xl w-full h-full object-cover"
          />
        </picture>
        <div className="bg-white lg:max-2xl:rounded-e-xl xs:max-lg:rounded-b-xl grid px-6 py-8 xs:max-lg:py-2">
          <h3 className="opacity-70 tracking-vwide">PERFUME</h3>
          <h1 className="">Gabrielle Essence Eau De Parfum</h1>
          <p className="flex opacity-70">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex gap-4 items-center mb-2">
            <p className="price text-3xl text-dark-cyan">$149.99</p>
            <p className="line-through text-xs">$169.99</p>
          </div>
          <button className="flex items-center justify-center gap-3 p-1 bg-dark-cyan rounded-md text-white cursor-pointer hover:bg-green-900 focus:bg-green-900"><img src={cart} alt=""  /> Add to Cart</button>
        </div>

      </div>
    </main>
  )
}

export default App
