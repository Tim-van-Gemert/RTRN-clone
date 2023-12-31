import Paragraph from "./paragraph"
export default function Hero () {
    return (
        <>
            <div className="h-full bg-main  relative z-20 w-full mb-[80px] xl:mb-[0px] h-mhero lg:h-hero flex flex-col justify-end  items-center md:items-end xl:items-center ">
                <div className="xl:w-site px-[16px] w-full xl:px-[0px] xl:gap-12 flex flex-col">
                    <div className="w-full h-full flex items-end hero-text ">
                    Wij zijn RTRN <br/> [ri-turn]
                    </div>
                </div>
                <div className=" w-full md:w-fit h-[256px]">
                    <Paragraph 
                    key={'p1'}
                    size={'p-s'}
                    contentTopLeft={''}
                    mobileBorderleft={true}
                    hasMobileBorder={true}
                    contentTopRight={['Branding bureau in Amsterdam.', <br key={'br1'}/>, 'Sorry nee, in Rotterdam.', <br key={'br2'}/>,  'Nee wacht, in Groningen.', <br key={'br3'}/>, 'Uhm ja, Groningen.']}
                    />
                </div>
            </div>   
            <div className="w-full flex h-[448px] -mt-[80px] items-end justify-center">
                <div className=" h-full">
                        <Paragraph 
                        key={'p2'}
                        size={'p-s'}
                        delay={0.5}
                        contentTopLeft={''}
                        contentTopRight={''}
                        contentBottomLeft={'Zie ons als een groep vakidioten, met verhalenvertellers, uitvinders en makers. Soms krijgt een bureau prijzen. Wij ook. Soms werkt een bureau voor grote merken en soms voor kleine jongens. Wij ook. En als creatief bureau zijn we soms über-kritisch en nemen we onszelf veel te serieus. Klopt, maar we zijn wel verdomd goed in ons werk.'}
                        />
                </div>
            </div>

        </>
    )
}