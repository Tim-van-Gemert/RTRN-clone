export default function Header () {
    return (
        <div className="w-screen px-[16px] xl:px-[0px]  py-[24px] xl:py-[0px] xl:w-site absolute z-20 xl:pt-[64px] h-fit flex justify-between items-center ">
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