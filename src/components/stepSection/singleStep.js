import Buttons from "../templates/button"
export default function SingleStep (props) {
    return (
        <div className="w-full h-full flex justify-between group py-[16px] pl-[32px] border-l-[1px] border-black flex-col">
            <div className=" flex flex-col gap-[32px]">
                <h4>{props.title}</h4>
                <Buttons 
                arrow={true}
                hovercColor={'yellow'} 
                baseColor={'white'}
                content={'Ontdek merkstrategie'}/>
            </div>
            <p className={`p-small w-[336px] opacity-0 group-hover:opacity-100 transition-all `}>{props.desc}</p>
        </div>
    )
}