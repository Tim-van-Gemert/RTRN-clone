export default function ImageBlock (props) {
    if (props.masonary) {
        return (
    <div className="flex   md:h-full xl:h-[1200px] w-full items-center justify-center xl:mb-[0px]  ">
    <div className="w-site h-full md:grid  flex flex-col  md:grid-cols-1 xl:grid-cols-1 md:mx-[80px] xl:mx-[0px] gap-[80px] xl:gap-[0px]">
        <div className=" w-1/2 h-fit md:w-full md:hidden xl:block">
            <img src={props.image1}/>
        </div>
        <div className="w-full flex justify-end">
            <img className="xl:w-1/2  w-3/4 object-cover md:object-cover xl:object-none xl:-mt-[240px]" src={props.image2}/>  
        </div>
        <div className=" w-3/4 md:w-1/2">
            <img className="xl:-mt-[40px] md:-ml-[80px] xl-ml-[160px]" src={props.image3}/>
        </div>
    </div>
    </div>
        )
    } else {
        return (
            <div className="flex flex-col xl:flex-row w-full justify-center px-[8px] md:px-[40px] xl:px-[80px] xl:pb-[80px] md:pt-[80px] xl:pt-[128px] gap-[16px] md:gap-[40px] xl:gap-[80px]">
                <div className="flex flex-col h-full justify-between ">
                <img className="w-1/2 lg:w-full" src={props.image1}/>
                <img src={props.image2}/>
                </div>
                <img src={props.image3}/>
            </div>
        )
    }

}