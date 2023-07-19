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
        <div className=" w-full px-[16px] xl:px-[0px] xl:w-site flex flex-col gap-[32px] pb-[40px] xl:pb-[80px]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   pb-[40px] xl:pb-[80px]  gap-[60px] xl:gap-[80px] pt-[208px] border-b-[1px] border-black ">
                {footerWidgets.map((widget) => {
                    return (
                        widget
                    )
                })}
            </div>
            <div className="flex flex-col xl:flex-row gap-[48px] p-small xl:justify-between ">
                    <div>© 2023 RTRN Creative Agency</div>
                <div className="flex flex-col xl:flex-row gap-[48px]">
                    <a className=" md:hidden lg:flex border-b-[1px] w-fit md:border-b-[0px] border-black">Algemene voorwaarden</a>
                    <a className=" md:hidden lg:flex border-b-[1px] w-fit md:border-b-[0px] border-black">Cookies</a>
                    <a className="  md:hidden lg:flex border-b-[1px] w-fit md:border-b-[0px] border-black">Privacy</a>
                </div>
            </div>
        </div>
    )
}