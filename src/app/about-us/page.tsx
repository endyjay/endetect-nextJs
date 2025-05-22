import AboutEndetect from "@/components/about/aboutEndetect";
import Softwares from "@/components/about/Softares";
import QueryCTA from "@/components/landing/QueryCTA";



// src/app/about-us/page.tsx or wherever the route is defined

export const metadata = {
  title: "EnDetect : Best Employee Activity Monitoring Software",
  description:
    "Employee Activity Monitoring Software - Monitor and track your employee's activity with great features eg : Frequent Screenshots, TIme sheets, Installed Software Report, browse history, social media reports, logs and USB storage access. Ask for a Demo now. Call us at +91-11-40141053.",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://endetect.com/about-us/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "EnDetect : Best Employee Activity Monitoring Software",
    description:
      "Employee Activity Monitoring Software - Monitor and track your employee's activity with great features eg : Frequent Screenshots, TIme sheets, Installed Software Report, browse history, social media reports, logs and USB storage access. Ask for a Demo now. Call us at +91-11-40141053.",
    url: "https://endetect.com/about-us/",
    siteName: "EnDetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Employee Monitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EnDetect : Best Employee Activity Monitoring Software",
    description:
      "Employee Activity Monitoring Software - Monitor and track your employee's activity with great features eg : Frequent Screenshots, TIme sheets, Installed Software Report, browse history, social media reports, logs and USB storage access. Ask for a Demo now. Call us at +91-11-40141053.",
    images: [
      "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
    ],
  },
};


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
