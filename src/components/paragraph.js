export default  function Paragraph (props) {



    console.log(props)
    return (
        <div className={`w-full ${props.inHero && props.contentTopLeft == "" ? 'h-[704px] ' : ''} grid  grid-cols-4`}>
            <div className={` ${props.inHero ? 'justify-end' : ''} col-span-3 pr-[80px] primary-text flex flex-col gap-6 border-r-[1px] border-black`}>
                {props.contentTopLeft}
                {props.contentBottomLeft}
            </div>
            <div className="secondary-text flex flex-col gap-6 col-span-1 pl-[32px] w-full">
                {props.contentTopRight}
                {props.contentBottomRight}
            </div>
        </div>

    )
}