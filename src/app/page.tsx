import {
  Currently,
  Experience,
  Header,
  Projects,
  Services,
  Technologies,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-[100vh] ">
      <Header />
      <Currently />
      <Services />
      <Technologies />
      <Projects />
      <Experience />
    </div>
  );
}
