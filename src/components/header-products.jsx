import LayoutAllProducts from "./layout-all-products";

const Header = () => {
    return (
        <div className="py-5">
        <LayoutAllProducts>
            <div className="w-1/2 h-full py-20 bg-amber-900 bg-opacity-25">
                <p  className="text-6xl ml-10 py-5 text-amber-950 font-semibold">
                    Products
                </p>                 
            </div>
        </LayoutAllProducts> 
        </div>
    )
      
}

export default Header;