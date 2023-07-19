export default function Header () {
    return (
        <div className="w-site absolute z-20 pt-[64px] h-fit flex justify-between items-start ">
            <img src="/rtrn-logo-filled.svg"/> 
            <div className="space-y-2">
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
            </div>
        </div>
    )
}