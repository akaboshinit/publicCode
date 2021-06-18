const Image_card = (prop:any) => {
    return (
        <div className="w-4/5 md:h-96 md:w-96 border border-black bg-white m-3 rounded-lg rounded-t-none">
            <div className="flex justify-center">
                <img src={prop.src} alt={prop.alt} className="" />
            </div>
            
            <div className="p-2">
                <h3 className="text-xl">{prop.title}</h3>
                <p className="text-base">{prop.description}</p>
            </div>
        </div>
    )
}

export default Image_card