import FooterWidget from "./footerWidget"
import Button from "../templates/button"
export default function Footer() {
    const footerWidgets = [
        {
            id: 1,
            title: 'Contact',
            content: ['+50 211 06 06', <br key={'br4'} />, 'mail@rtrn.nl']
        },
        {
            id: 2,
            title: 'Adres',
            content: ['Friesestraatweg 215c', <br key={'br5'}/>, '9743 AD Groningen']
        },
        {
            id: 3,
            title: 'Volg ons',
            content: ['LinkedIn', <br key={'br6'}/>, 'Instagram']
        },
        {
            id: 4,
            title: 'Nieuwsbrief',
            content : <Button key={'buttons 1'} arrow={true} hovercColor={'yellow'} baseColor={'white'} to={'#'} content={'Meld je aan'}/>
        }
    ]

    const BottomWidgets = [
        {
            id: 1,
            content: 'Algemene voorwaarden'
        },
        {
            id: 2,
            content: 'Cookies'
        },
        {
            id: 3,
            content: 'Privacy'
        }
    ]

    return ( 
        <div className=" w-full px-[16px] xl:px-[0px] xl:w-site flex flex-col gap-[32px] pb-[40px] xl:pb-[80px]">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   pb-[40px] xl:pb-[80px]  gap-[60px] xl:gap-[80px] pt-[80px] xl:pt-[208px] border-b-[1px] border-black ">
                {footerWidgets.map((widget) => {
    
                    return (
                        <FooterWidget 
                            key={'footerwidget' + widget.id}
                            title={widget.title}
                            content={widget.content}
                        />
                    )
                })}
            </div>
            <div className="flex flex-col xl:flex-row gap-[48px] p-small xl:justify-between ">
                    <div>© 2023 RTRN Creative Agency</div>
                <div className="flex flex-col xl:flex-row gap-[48px]">
                    {BottomWidgets.map((widget) => {

                        return (
                            <a key={'bottomwidgets' + widget.id} className=" md:hidden hover:text-[#b880f8] hover:cursor-pointer transition-all lg:flex border-b-[1px] w-fit md:border-b-[0px] border-black">{widget.content}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}