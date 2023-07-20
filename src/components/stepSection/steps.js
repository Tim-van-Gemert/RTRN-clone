import SingleStep from "./singleStep"
import Button from "../templates/button"
export default function Steps () {
    const ActiveSteps = [
        {
            title: ['Identificeer de', <br key={'step1'}/>, 'kern'],
            desc: 'Tijdens het strategisch voortraject ontwikkelen we samen de richting van je merk, oftewel waar sta je en waar wil je naar toe?',
            button: 'Ontdek merkstrategie',
            delay: 0.0,
        },
        {
            title: ['Vertel het', <br key={'step2'}/>, 'verhaal'],
            desc: 'Tijdens het strategisch voortraject ontwikkelen we samen de richting van je merk, oftewel waar sta je en waar wil je naar toe?',
            button: 'Ontdek design',
            delay: 0.2,
        },
        {
            title: ['Realiseer', <br key={'step3'}/>, 'verandering'],
            desc: 'Tijdens het strategisch voortraject ontwikkelen we samen de richting van je merk, oftewel waar sta je en waar wil je naar toe?',
            button: 'Ontdek transformatie',
            delay: 0.4,
        },
    ]
    let index = 0;
    return (
       <div className="w-full md:-mt-[80px]  lg:-mt-[0px] flex flex-col gap-[32px] pb-[56px] pt-[32px]   xl:gap-[80px] lg:mb-[80px] xl:py-[96px] items-center justify-top xl:h-[744px] bg-sec">
        <div className="xl:w-site w-full px-[32px] xl:px-[0px] xl:h-[416px] grid grid-cols-1 xl:grid-cols-3">
            {ActiveSteps.map((step)=> {
                index++
                return (
                    <SingleStep
                    key={'step ' + index}
                    title={step.title}
                    desc={step.desc}
                    delay={step.delay}
                    button={step.button}
                    />
                )
            })}
        </div>
        <div className="xl:w-site w-full px-[32px] xl:px-[0px]">
            <Button 
            key={"Button2"}
            arrow={true}
            hovercColor={'yellow'} 
            baseColor={'white'}
            content={'Meer over onze services'}/>  
        </div>
       </div> 
    )
}