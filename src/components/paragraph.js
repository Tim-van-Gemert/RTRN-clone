
export default  function Paragraph (props) {
    console.log(props.contentTopRight)
    return (
        <div className="w-full flex justify-center">
        <div className={`w-site ${props.inHero && props.contentTopLeft == "" ? 'h-[704px] ' : ''} grid  grid-cols-4`}>
            <div className={` ${props.inHero ? 'justify-end' : ''} col-span-3 pr-[80px] primary-text flex flex-col gap-6 `}>
                <div className={` ${props.inHero ? 'w-full' : 'w-[592px]'}`}>
                {props.contentTopLeft}
                {props.contentBottomLeft}
                </div>
            </div>
            <div className="secondary-text flex flex-col gap-[16px] col-span-1 pl-[32px] border-l-[1px] border-black  w-full">
                {props.contentTopRight}
                {props.contentBottomRight}
            </div>
        </div>
        </div>
    )
}