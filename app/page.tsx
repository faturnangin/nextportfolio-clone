import { Expertise, Services, Portfolio, Blog, TypingText} from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">       
      <Expertise/>
      <div className="relative">
      <Services/>
      <div className="-z-50 absolute gradient-04" />
      </div>
      <Portfolio/>
      <Blog/>
    </div>
  )
}