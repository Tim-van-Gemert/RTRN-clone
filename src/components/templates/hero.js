import Paragraph from "./paragraph"
export default function Hero () {
    return (
        <>
            <div className="h-full bg-main  relative z-20 w-full mb-[80px] xl:mb-[0px] h-mhero xl:h-hero flex flex-col justify-end  items-center md:items-end lg:md:items-center ">
                <div className="xl:w-site px-[16px] w-full xl:px-[0px] xl:gap-12 flex flex-col">
                    <div className="w-full h-full flex items-end hero-text">
                    Wij zijn RTRN <br/> [ri-turn]
                    </div>
                </div>
                <div className=" w-full md:w-fit h-[256px]">
                    <Paragraph 
                    size={'p-s'}
                    contentTopLeft={''}
                    borderleft={true}
                    hasMobileBorder={true}
                    contentTopRight={['Branding bureau in Amsterdam.', <br/>, 'Sorry nee, in Rotterdam.', <br/>,  'Nee wacht, in Groningen.', <br/>, 'Uhm ja, Groningen.']}
                    />
                </div>
            </div>   
            <div className="w-full flex h-[448px]  items-end justify-center">
                <div className=" h-full">
                        <Paragraph 
                        size={'p-s'}
                        contentTopLeft={''}
                        contentTopRight={''}
                        contentBottomLeft={'Zie ons als een groep vakidioten, met verhalenvertellers, uitvinders en makers. Soms krijgt een bureau prijzen. Wij ook. Soms werkt een bureau voor grote merken en soms voor kleine jongens. Wij ook. En als creatief bureau zijn we soms über-kritisch en nemen we onszelf veel te serieus. Klopt, maar we zijn wel verdomd goed in ons werk.'}
                        />
                </div>
            </div>

        </>
    )
}