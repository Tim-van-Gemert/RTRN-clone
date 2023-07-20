
export default  function Paragraph (props) {
    return (
        <div className={`w-full h-full px-[16px] md:px-[40px] flex flex-col xl:flex-row justify-center`}>
        <div className={`xl:w-site h-full  grid  grid-cols-1 xl:grid-cols-4`}>
            <div className={`  ${props.size == "p-s" ? 'mp2  xl:paragraph' : 'paragraph'} xl:col-span-3  xl:pr-[80px] w-full flex flex-col justify-end  gap-6 ${props.reverseOnMobile ? 'order-last' : ''} `}>
                {props.contentTopLeft}
                {props.contentBottomLeft}
            </div>
            <div className={`secondary-text animateline h-full flex flex-col gap-[16px]  col-span-1  border-black ${props.borderleft && props.hasMobileBorder ? 'border-l-[1px] xl:border-l-[1px] pl-[16px] xl:pl-[32px]' : props.hasMobileBorder ? ' border-t-[1px] xl:border-t-[0px] xl:border-l-[1px] pt-[32px] xl:pt-[0px] xl:pl-[32px]' : 'border-0 xl:border-l-[1px]'}  w-full `}>
                {props.contentTopRight}
            </div>
        </div>
        </div>
    )
}