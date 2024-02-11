import LayoutProduct2 from "./layout-product-2";

const Layer3 = () => {
    return (
        <LayoutProduct2>
            <div className="w-1/2 h-full py-10 mt-20 bg-amber-800 bg-opacity-75">
                <div className="text-slate-100 ml-10 mr-10 py-10">
                    <p className="text-4xl font-bold">Discover Our Latest</p>
                    <p className="text-4xl font-bold mb-7">Furniture Collections</p>
                    <p>Explore our new arrivals and seasonal collections to find the perfect furniture for your home.</p>
                </div>
                <button className="ml-10 mt-5 mb-10 py-2 bg-amber-700 text-slate-100 py-2 px-4 hover:bg-amber-500">
                    Shop Now
                </button>
                <button className="mt-5 mb-10 py-2 border border-amber-600 ml-10 text-slate-100 py-2 px-4 hover:bg-amber-500">
                    Browse
                </button>   
            </div>
        </LayoutProduct2>
    )
      
}

export default Layer3;