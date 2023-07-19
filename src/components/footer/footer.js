import FooterWidget from "./footerWidget"
import Button from "../templates/button"
export default function Footer() {
    const footerWidgets = [
        <FooterWidget
            id={'contact'}
            title={'Contact'}
            content={['+50 211 06 06', <br />, 'mail@rtrn.nl']}
        />,
        <FooterWidget
            id={'adres'}
            title={'Adres'}
            content={['Friesestraatweg 215c', <br />, '9743 AD Groningen']}
        />,
        <FooterWidget
            id={'volg-ons'}
            title={'Volg ons'}
            content={['LinkedIn', <br />, 'Instagram']}
        />,
        <FooterWidget
            id={'nieuwsbrief'}
            title={'Nieuwsbrief'}
            content={
                <Button
                arrow={true}
                hovercColor={'yellow'}
                baseColor={'white'}
                to={'#'}
                content={'Meld je aan'}
              />
            }
        />
    ]


    return ( 
        <div className="w-site flex flex-col gap-[32px] pb-[80px]">
            <div className="w-full grid grid-cols-4   pb-[80px] gap-[80px] pt-[208px] border-b-[1px] border-black ">
                {footerWidgets.map((widget) => {
                    return (
                        widget
                    )
                })}
            </div>
            <div className="flex flex-row justify-between ">
                    <div>© 2023 RTRN Creative Agency</div>
                <div className="flex flex-row gap-[48px]">
                    <a>Algemene voorwaarden</a>
                    <a>Cookies</a>
                    <a>Privacy</a>
                </div>
            </div>
        </div>
    )
}