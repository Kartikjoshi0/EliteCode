

export const Languages=()=>{
    return (
        <div className="w-full h-292px flex flex-col gap-4 items-center justify-center opacity-80">
            <div className="flex flex-col items-center justify-center w-411px h-48px">
            <div className="text-5xl text-white font-bold">Supported <span className="text-[#4E7AFF]">Languages</span></div>
            <div className="text-sm text-gray-500 w-full mx:w-1/3">Solve problems in your preferred language with Algorithmic Arena, offering a wide range of programming language options.</div>
            </div>
            <div>
                <img src="/assets/Language Container.png" alt="" width={672} height={112}/>
            </div>
            <span className="text-Content-Secondary">& Many more</span>
        </div>
    )
}


