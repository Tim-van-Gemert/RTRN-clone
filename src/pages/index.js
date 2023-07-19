import Hero from "@/components/hero"
import Paragraph from "@/components/paragraph"
import Text from "@/components/text"
import ImageBlock from "@/components/imageBlock"
import Buttons from "@/components/button"
import Steps from "@/components/StepSection/steps"
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-[80px]">
    <Hero/>
    <ImageBlock
      image1={'/image1.png'}
      image3={'/image3.png'}
    />
    <Text 
      text={['Als je je klant niet weet te bereiken, zullen', <br></br>, 'ze nooit weten hoe fantastisch je bent.']}
    />
    <Paragraph 
      inHero={false}
      contentTopLeft={'Elke touchpoint is een gelegenheid om de relatie tussen jou en je klant te versterken. Wij ontwikkelen eigenlijk alles waarmee jij je klanten verrast, verleidt, verblijdt en verovert.'}
      contentTopRight={[
        [
          <div className="flex flex-row items-center gap-[16px]">
            <Buttons color={'yellow'}/>
            <div>Werk</div>
          </div>
        ],     
        [
          <div className="flex flex-row items-center gap-[16px]">
            <Buttons color={'yellow'}/>
            <div>Contact</div>
          </div>
        ]]   
        }
    />
    <Steps/>
    </div>
  )
}
