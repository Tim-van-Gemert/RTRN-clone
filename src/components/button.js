export default function Button (props) {
    console.log(props.content)
    return (
        <div className=" h-fit flex flex-row gap-[16px] transition-all hover:cursor-pointer ">
            <a className={`p-3 rounded-full transition-all flex flex-row hover:flex-row-reverse gap-[8px] border-[1px] ${ props.color == 'yellow' ? 'hover:bg-main' : 'hover:bg-white'} hover:border-main transition-all border-black`}>
                { props.content != undefined ? <div>{props.content}</div> : null }
                <img src="/ArrowRight.svg"/>
            </a>
        </div>
    )
}