export default function Text (props) {
    return (
    <div className="w-full px-[16px] md:px-[56px] xl:px-[0px] flex justify-center">
        <div className={`w-site   ${props.size == "p" ? 'text' : ' heading'} `}>{props.text}</div>
    </div>
    )
}