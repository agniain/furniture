import LayoutProduct1 from "./layout-product-1";

const Layer1 = () => {
    return (
        <LayoutProduct1>
            <div className="w-full md:w-1/2 h-full py-6 md:py-10 bg-amber-800 bg-opacity-75">
                <div className="text-slate-100 ml-4 md:ml-10 mr-4 md:mr-10 py-5">
                    <p className="mb-4 md:mb-6">Discover</p>
                    <p className="text-2xl md:text-4xl font-bold">Experience Modern</p>
                    <p className="text-2xl md:text-4xl font-bold">Furniture Like Never</p>
                    <p className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Before</p>
                    <p className="text-sm md:text-base">At our online store, we offer a wide range of modern furniture that combine quality craftmanship, innovative design, and sustainable materials. Whether you're looking for a statement piece or a complete home makeover, our collection has something for every style and budget.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 py-6 md:py-10 mx-4 md:mx-10 text-slate-100">
                        <p className="text-base md:text-xl font-bold">Quality</p>
                        <p className="text-sm md:text-base">Experience the finest craftmanship and attention to detail in every piece.</p>                  
                    </div>
                    
                    <div className="md:w-1/2 py-6 md:py-10 mr-4 md:mr-10 text-slate-100">
                        <p className="text-base md:text-xl font-bold">Design</p>
                        <p className="text-sm md:text-base">
                            Discover modern furniture designs that are both functional and aesthetically pleasing.
                        </p>                  
                    </div>
                </div>   
            </div>
        </LayoutProduct1> 
    )
      
}

export default Layer1;