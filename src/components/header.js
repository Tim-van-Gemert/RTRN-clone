export default function Header () {
    return (
        <div className="w-site absolute z-20  h-[128px] flex justify-between items-center ">
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