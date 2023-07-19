import SingleStep from "./singleStep"
import Buttons from "../templates/button"
export default function Steps () {
    const ActiveSteps = [
        <SingleStep 
            title={['Identificeer', <br/>, 'de kern']}
            desc={'Tijdens het strategisch voortraject ontwikkelen we samen de richting van je merk, oftewel waar sta je en waar wil je naar toe?'}
            />,
        <SingleStep 
            title={['Vertel', <br/>, 'het verhaal']}
            desc={'Tijdens het strategisch voortraject ontwikkelen we samen de richting van je merk, oftewel waar sta je en waar wil je naar toe?'}
            />,
        <SingleStep 
            title={['Realiseer', <br/>, 'verandering']}
            desc={'Tijdens het strategisch voortraject ontwikkelen we samen de richting van je merk, oftewel waar sta je en waar wil je naar toe?'}
            />,
    ]

    return (
       <div className="w-full flex flex-col gap-[120px] my-[84px] py-[96px] items-center justify-top h-[744px] bg-sec">
        <div className="w-site h-[416px]  grid grid-cols-3">
            {ActiveSteps.map((step)=> {
                return (
                  step  
                )
            })}
        </div>
        <div className="w-site">
            <Buttons 
            arrow={true}
            hovercColor={'yellow'} 
            baseColor={'white'}
            content={'Meer over onze services'}/>  
        </div>
       </div> 
    )
}