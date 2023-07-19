import Hero from "@/components/hero"
import Paragraph from "@/components/paragraph"
import Text from "@/components/text"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-[80px]">
    <Hero/>
    <Text 
      text={'Als je je klant niet weet te bereiken, zullen ze nooit weten hoe fantastisch je bent.'}
    />
    <Paragraph 
      inHero={false}
      contentTopLeft={'Elke touchpoint is een gelegenheid om de relatie tussen jou en je klant te versterken. Wij ontwikkelen eigenlijk alles waarmee jij je klanten verrast, verleidt, verblijdt en verovert.'}
      contentTopRight={'B'}
    />
    </div>
  )
}
