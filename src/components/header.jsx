import Layout from "./layout-header";

const Header = () => {
    return (
        <Layout>
            <div className="w-full lg:w-1/2 h-full pt-20 lg:pt-40 pb-10 lg:pb-20 bg-slate-100 bg-opacity-50">
                <p  className="text-4xl lg:text-6xl ml-4 lg:ml-10 pt-5 font-semibold">
                    <span className="text-amber-950">Discover the </span>
                    <span className="text-amber-700">Perfect </span>
                </p>
                <p className="text-4xl lg:text-6xl ml-4 lg:ml-10 font-semibold">
                    <span className="text-amber-700">Furniture </span>
                    <span className="text-amber-amber-950">for Your </span>
                </p>
                <p className="text-4xl lg:text-6xl ml-4 lg:ml-10 font-semibold text-amber-950">
                    Home
                </p>
                <p className="text-amber-700 ml-4 lg:ml-10 mt-4 lg:mt-6 font-semibold text-lg lg:text-xl">
                    Transform your living space with our stylish and modern furniture collections
                </p>
                <div className="flex justify-center">
                    <button className="bg-amber-700 mt-6 mb-4 lg:mb-10 text-white py-1 px-2 rounded hover:bg-amber-700">
                        Shop Now
                    </button>
                </div>    
            </div>
        </Layout> 
    )
      
}

export default Header;