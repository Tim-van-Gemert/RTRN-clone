export default function Text (props) {
    return (
    <div className="w-full px-[16px] md:px-[56px] xl:px-[0px] flex justify-center">
        <div className={`w-site   ${props.size == "p" ? 'md:paragraph mp1' : ' heading'} `}>{props.text}</div>
    </div>
    )
}