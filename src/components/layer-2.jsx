

const Layer2 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-10">
            <div className="md:w-1/2 py-10 mx-10 text-slate-100">
                <div className="border p-2">
                        <img
                            src="/images/image-5.png"
                            alt=""
                            className="w-full"
                        />
                </div>
            </div>                   
            <div className="md:w-1/2 text-amber-900">
                <p>Quality</p>
                <p className="text-3xl font-bold">Experience the Best in Modern Furniture</p>
                <p>Discover our impressive growth, exceptional customer satisfaction, and wide range of high-quality products.</p>                  
            
                <div className="flex flex-col md:flex-row items-center justify-center my-5">
                    <div className="md:w-1/2 text-amber-900">
                        <p className="text-3xl font-bold">50%</p>
                        <p>Increase in Customer Satisfaction</p>                  
                    </div>          
                    <div className="md:w-1/2 text-amber-900">
                        <p className="text-3xl font-bold">50%</p>
                        <p>Growth in Product Selection</p>                  
                    </div>
                </div>
                <button className="border border-amber-800 text-amber-900 py-2 px-4 hover:bg-amber-100">
                    Learn More
                </button>
                <button className="ml-10 text-amber-900 py-2 px-4 hover:bg-amber-100">
                    Sign up &gt;
                </button>
            </div> 
        </div>      
    )     
}

export default Layer2;