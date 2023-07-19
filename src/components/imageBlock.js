export default function ImageBlock (props) {
    return (
    <div className="flex flex-row w-full justify-center  px-[80px] pb-[80px] pt-[128px] gap-[80px]">
        <div className="flex flex-col justify-between ">
        <img src={props.image1}/>
        </div>
        <img src={props.image3}/>
    </div>
    )
}