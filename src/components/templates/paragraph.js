
export default  function Paragraph (props) {
    console.log(props.contentTopRight)
    return (
        <div className="w-full px-[16px] md:px-[40px] flex flex-col xl:flex-row justify-center">
        <div className={`xl:w-site ${props.inHero && props.contentTopLeft == "" ? 'xl:h-[704px] ' : ''} grid  gap-[64px] xl:gap-[0px] grid-cols-1 xl:grid-cols-4`}>
            <div className={` ${props.inHero ? 'justify-end' : ''}  ${props.size == "p-s" ? 'primary-text  xl:paragraph' : 'paragraph'} xl:col-span-3 xl:pr-[80px] w-full flex flex-col gap-6 `}>
                <div className={` ${props.inHero ? 'w-full' : 'xl:w-[592px]'}`}>
                {props.contentTopLeft}
                {props.contentBottomLeft}
                </div>
            </div>
            <div className="secondary-text animateline flex flex-col gap-[16px] col-span-1 pt-[32px] xl:pt-[0px] xl:pl-[32px] border-t-[1px] xl:border-t-[0px] xl:border-l-[1px] border-black  w-full">
                {props.contentTopRight}
                {props.contentBottomRight}
            </div>
        </div>
        </div>
    )
}