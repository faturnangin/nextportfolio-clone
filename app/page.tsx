import { Hero, Services, Portfolio, Blog, TypingText, Footer, Expertise} from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden ">       
      <Hero/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Footer/>
    </div>
  )
}