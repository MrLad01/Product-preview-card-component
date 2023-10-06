import productd from "./assets/image-product-desktop.jpg"
import productm from "./assets/image-product-mobile.jpg"
import cart from "./assets/icon-cart.svg"


function App() {
  const screen = window.innerWidth
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="lg:max-2xl:w-2/5 xs:max-lg:w-5/6 xs:max-lg:h-5/6 lg:max-2xl:h-2/3 grid lg:max-2xl:grid-cols-2 xs:max-lg:grid-rows-2 lg:max-2xl:shadow-xl">
      <picture>
          <source
            srcSet={`${productd} 1x, ${productd} 2x`}
            media="(min-width: 1000px)"
          />
          <source srcSet={`${productm} 1x, ${productm} 2x`} />
          <img
            src={screen > 1000 ? productd : productm}
            alt="Gabrielle Essense eau de perfaum"
            className="rounded-s-xl w-full h-full object-cover"
          />
        </picture>
        <div className="bg-white rounded-e-xl grid px-4 py-10">
          <h3 className="opacity-70 tracking-vwide">PERFUME</h3>
          <h2 className="">Gabrielle Essence Eau De Parfum</h2>
          <p className="flex opacity-70">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex gap-2 items-center">
            <p className="price text-2xl">$149.99</p>
            <p className="line-through">$169.99</p>
          </div>
          <button className="flex items-center justify-center"><img src={cart} alt=""  /> Add to Cart</button>
        </div>

      </div>
    </main>
  )
}

export default App
