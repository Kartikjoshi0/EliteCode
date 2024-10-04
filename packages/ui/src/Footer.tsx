


export const Footer=()=>{
    return (
        <div className="flex justify-around items-center bg-background-primary w-full h-[72px]">
            <div className="justify-left flex gap-10">
            <div className="text-Content-Secondary text-500 text-l">Help & Support</div>
            <div className="text-Content-Secondary text-500 text-l">Report an Issue</div>
            <div className="text-Content-Secondary text-500 text-l">Privacy Policy</div>
            </div>
            <div className="flex gap-10">
                <button className="text-Content-Secondary">
                    <img src="/assets/Social Icons.png" alt="" width={16} height={16} />
                </button>
                <button className="text-Content-Secondary">
                    <img src="/assets/Social Icons (1).png" alt="" width={16} height={16} />
                </button>
                <button className="text-Content-Secondary">
                    <img src="/assets/Social Icons (2).png" alt="" width={16} height={16} />
                </button>
            </div>


        </div>
    )
}

//styleName: Text/L/Medium;
// font-family: var(--FamilySatoshi);
// font-size: var(--TextLMediumSize);
// font-weight: 500;
// line-height: var(--TextLMediumLineHeight);
// text-align: left;
