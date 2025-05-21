import AboutEndetect from "@/components/about/aboutEndetect";
import Softwares from "@/components/about/Softares";
import QueryCTA from "@/components/landing/QueryCTA";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white ">
      {/* About Section */}
      <AboutEndetect />
      <Softwares/>
      <QueryCTA/>
    </main>
  );
}
