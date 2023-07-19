import Hero from "@/components/templates/hero"
import Paragraph from "@/components//templates/paragraph"
import Text from "@/components/templates/text"
import ImageBlock from "@/components//templates/imageBlock"
import Button from "@/components/templates/button"
import Steps from "@/components/StepSection/steps"
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-[80px]">
      {/* <Hero /> */}
      {/* <ImageBlock
        image1={'/image1.png'}
        image3={'/image3.png'}
      /> */}
      <Text
        text={['Als je je klant niet weet te bereiken, zullen', <br></br>, 'ze nooit weten hoe fantastisch je bent.']}
        size={'p'}
      />
      {/* <Paragraph
        inHero={false}
        size={'p-s'}
        contentTopLeft={'Elke touchpoint is een gelegenheid om de relatie tussen jou en je klant te versterken. Wij ontwikkelen eigenlijk alles waarmee jij je klanten verrast, verleidt, verblijdt en verovert.'}
        contentTopRight={[
          [
            <div className="flex flex-row items-center gap-[16px]">
              <Button
                arrow={true}
                color={'yellow'}
                hoverColor={'yellow'}
                baseColor={'white'} />
              <div>Werk</div>
            </div>
          ],
          [
            <div className="flex flex-row items-center gap-[16px]">
              <Button
                arrow={true}
                color={'yellow'}
                hoverColor={'yellow'}
                baseColor={'white'} />
              <div>Contact</div>
            </div>
          ]]
        }
      />
      <Steps />
      <ImageBlock
        image1={'/image1.png'}
        image3={'/image3.png'}
      />
      <Text
        text={'Klaar voor verandering?'}
        size={'h2'}
      />
      <Paragraph
        inHero={false}
        size={'p'}
        contentTopLeft={'Geef ons een belletje'}
        contentTopRight={[
          [
            <div className="flex flex-row items-center gap-[16px]">
              <Button
                arrow={false}
                hovercColor={'white'}
                baseColor={'yellow'}
                to={'tel:+0502110906'}
                content={'+050 211 09 06'}
              />
            </div>
          ],
          [
            <div className="flex flex-row items-center gap-[16px]">
              <Button
                arrow={false}
                hovercColor={'yellow'}
                baseColor={'white'}
                to={'mailto:mail@rtrn.nl'}
                content={'mail@rtrn.nl'}
              />
            </div>
          ]]
        }
      /> */}
    </div>
  )
}
