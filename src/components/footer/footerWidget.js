export default function FooterWidget (props) {
    return (
        <div className="w-full h-full flex-col">
            <div className="pb-[24px] h6 border-b-[1px] border-black">{props.title}</div>
            <div className="pt-[32px] secondary-text">
                {props.content}
            </div>
        </div>
    )
}