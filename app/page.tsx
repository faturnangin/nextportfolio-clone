import { Hero, Services, Portfolio, Blog, TypingText, Footer, Expertise} from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden ">       
      <Hero/>
      <div className="relative">
      <Services/>
      <div className="-z-50 absolute gradient-04" />
      </div>
      <Portfolio/>
      <Blog/>
      <Footer/>
    </div>
  )
}