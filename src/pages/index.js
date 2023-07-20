import Hero from "@/components/templates/hero"
import Paragraph from "@/components//templates/paragraph"
import Text from "@/components/templates/text"
import ImageBlock from "@/components//templates/imageBlock"
import Button from "@/components/templates/button"
import Steps from "@/components/stepSection/steps"
import DualButtons from "@/components/templates/dualButtons"

export default function Home() {
  return (
    <div className="w-full h-full flex gap-[80px] flex-col">
      <Hero />
      <ImageBlock
        image1={'/image1.png'}
        image3={'/image3.png'}
      />
      <Text
        text={['Als je je klant niet weet te bereiken, zullen', <br key={'br8'}/>, 'ze nooit weten hoe fantastisch je bent.']}
        size={'p'}
      />
      <Paragraph
        inHero={false}
        size={'p-s'}
        leftTextUp={true}
        hasMobileBorder={true}
        mobileBorderleft={false}
        tabletBorderleft={true}
        contentTopLeft={'Elke touchpoint is een gelegenheid om de relatie tussen jou en je klant te versterken. Wij ontwikkelen eigenlijk alles waarmee jij je klanten verrast, verleidt, verblijdt en verovert.'}
        contentTopRight={<DualButtons content={['werk', 'contact']}/>}
      />
      <Steps />
      <ImageBlock
        masonary={true}
        image1={'/image1.png'}
        image2={'/image4.png'}
        image3={'/image3.png'}
      />
      <Text
        text={'Klaar voor verandering?'}
        size={'h2'}
      />
      <Paragraph
        inHero={false}
        mobileBorderleft={true}
        hasMobileBorder={true}
        leftTextUp={true}
        size={'p'}
        contentTopLeft={'Geef ons een belletje.'}
        extraStyling={'border-l-[1px] border-black pl-[16px] md:border-l-0 md:pl-[0px]'}
        contentTopRight={[
            <div key={'phonebutton'} className="flex flex-row items-center gap-[16px]">
              <Button
                arrow={false}
                hovercColor={'white'}
                baseColor={'yellow'}
                to={'tel:+0502110906'}
                content={'+050 211 09 06'}
              />
            </div>
          ,
            <div key={'mailbutton'} className="flex flex-row items-center gap-[16px]">
              <Button
                arrow={false}
                hovercColor={'yellow'}
                baseColor={'white'}
                to={'mailto:mail@rtrn.nl'}
                content={'mail@rtrn.nl'}
              />
            </div>
          ]
        }
      />
    </div>
  )
}
