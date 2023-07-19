import Paragraph from "./paragraph"
export default function Hero () {
    return (
        <div className="h-hero w-full flex flex-col justify-center items-center bg-main">
            <div className="w-site h-fit">
                <div className="w-full h-full flex items-center hero-text ">
                Wij zijn RTRN <br/> [ri-turn]
                </div>
                <Paragraph 
                textRight={true}
                />
            </div>
        </div>   
    )
}