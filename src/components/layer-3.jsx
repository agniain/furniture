import LayoutProduct2 from "./layout-product-2";

const Layer3 = () => {
    return (
        <LayoutProduct2>
            <div className="w-full md:w-1/2 h-full md:mt-8 md:mt-20 bg-amber-800 bg-opacity-75">
                <div className="text-slate-100 ml-4 md:ml-10 mr-4 md:mr-10 py-6 md:py-10">
                    <p className="text-2xl md:text-4xl font-bold">Discover Our Latest</p>
                    <p className="text-2xl md:text-4xl font-bold mb-4 md:mb-7">Furniture Collections</p>
                    <p className="text-sm md:text-base">
                        Explore our new arrivals and seasonal collections to find the perfect furniture for your home.
                    </p>
                </div>
                <button className="ml-4 md:ml-10 mt-4 md:mt-5 mb-4 md:mb-10 py-2 bg-amber-700 text-slate-100 px-4 hover:bg-amber-500">
                    Shop Now
                </button>
                <button className="mt-4 md:mt-5 mb-4 md:mb-10 py-2 border border-amber-600 ml-4 md:ml-10 text-slate-100 px-4 hover:bg-amber-500">
                    Browse
                </button>   
            </div>
        </LayoutProduct2>
    )
      
}

export default Layer3;