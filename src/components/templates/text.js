export default function Text (props) {
    return (
    <div className="w-full flex justify-center">
        <div className={`w-site ${props.size == "p" ? 'paragraph' : 'h2'} `}>{props.text}</div>
    </div>
    )
}