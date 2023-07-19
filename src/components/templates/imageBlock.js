export default function ImageBlock (props) {
    return (
    <div className="flex flex-col xl:flex-row w-full justify-center px-[8px] md:px-[40px] xl:px-[80px] xl:pb-[80px] md:pt-[80px] xl:pt-[128px] gap-[16px] md:gap-[40px] xl:gap-[80px]">
        <div className="flex flex-col md:w-1/2 xl:w-1/4 justify-between ">
        <img src={props.image1}/>
        </div>
        <img src={props.image3}/>
    </div>
    )
}