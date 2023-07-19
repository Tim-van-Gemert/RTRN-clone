import Paragraph from "./paragraph"
export default function Hero () {
    return (
        <>
        <div className="bg-main w-full h-[896px] absolute z-10"></div>
            <div className="h-full relative z-20 w-full flex flex-col items-center ">
                <div className="w-site h-hero  gap-12 flex flex-col">
                    <div className="w-full h-full flex items-end hero-text ">
                    Wij zijn RTRN <br/> [ri-turn]
                    </div>
                </div>
                <div className="w-site">
                    <Paragraph 
                    inHero={true}
                    size={'p-s'}
                    contentTopLeft={''}
                    contentBottomLeft={'Zie ons als een groep vakidioten, met verhalenvertellers, uitvinders en makers. Soms krijgt een bureau prijzen. Wij ook. Soms werkt een bureau voor grote merken en soms voor kleine jongens. Wij ook. En als creatief bureau zijn we soms über-kritisch en nemen we onszelf veel te serieus. Klopt, maar we zijn wel verdomd goed in ons werk.'}
                    contentTopRight={['Branding bureau in Amsterdam.', <br/>, 'Sorry nee, in Rotterdam.', <br/>,  'Nee wacht, in Groningen.', <br/>, 'Uhm ja, Groningen.']}
                    />
                </div>
                
            </div>   
        </>
    )
}