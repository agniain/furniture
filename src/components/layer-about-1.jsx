const LayerAbout1 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10">                   
            <div className="md:w-1/2 text-amber-900">
                <p className="py-10 text-2xl font-bold">Transforming spaces with modern furniture that combines style and functionality.</p>
                <p className="text-sm md:text-base">Our brand was born out of passion for creating modern furniture that elevates living spaces. With a focus on innovative design and quality craftmanship, we strive to provide furniture that not only looks great but also enhances the way you live.</p>                  
            
            </div>
            <div className="md:w-1/2 py-4 md:py-10 mx-4 md:mx-10 text-slate-100">
                <div className="border p-2">
                        <img
                            src="/images/image-5.png"
                            alt=""
                            className="w-full"
                        />
                </div>
            </div> 
        </div>      
    )     
}

export default LayerAbout1;