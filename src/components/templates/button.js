export default function Button (props) {
    return (
        <div key={props.content} className=" h-fit  flex flex-row gap-[16px] transition-all hover:cursor-pointer ">
            <a href={props.to} className={`${props.content == undefined? 'p-3' : 'p-5'} rounded-full transition-all flex items-center  flex-row hover:flex-row-reverse gap-[8px] border-[1px] ${ props.hoverColor == 'yellow' ? 'hover:bg-main hover:border-main' : 'hover:bg-white'}  ${ props.baseColor == 'yellow' ? 'bg-main hover:bg-[#FEF84C]' : 'bg-transparant'}  transition-all border-black`}>
                {props.content != undefined ? <div>{props.content}</div> : null }
                {props.arrow ? <img  className="w-fit h-fit " src="/ArrowRight.png"/> : null}
            </a>
        </div>
    )
}