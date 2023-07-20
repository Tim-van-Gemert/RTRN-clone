import Button from "./button"
export default function DualButtons (props) {    
    let index = 0 
    return (
        props.content.map((c)=> {
            return (
            <div key={'dualbuttons' + index++} className="flex flex-row items-center gap-[16px]">
                <Button
                arrow={true}
                color={'yellow'}
                hoverColor={'yellow'}
                baseColor={'white'} />
                <div>{c}</div>
            </div>
            )
        })
    )
}