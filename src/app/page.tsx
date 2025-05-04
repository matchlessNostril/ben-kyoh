import Image from "next/image";
import { Header } from "@/components/domain/layout";

export default function OnboardingPage() {
  return (
    <main className="h-full flex flex-col bg-gradient-to-b from-primary from-0% via-primary-light via-20% to-white to-50%">
      <Header />

      <section className="text-center my-[6vh] lg:my-[8vh] xl:my-[10vh] px-2">
        <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4">
          Introducing Title
        </h2>
        <p className="text-gray text-sm sm:text-lg xl:text-xl max-w-xl mx-auto">
          description description description description description
        </p>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-6 w-full max-w-xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 mb-10">
        <FeatureCard title="Feat 1" image="/logo.png" />
        <FeatureCard title="Feat 2" image="/logo.png" />
        <FeatureCard title="Feat 3" image="/logo.png" />
        <FeatureCard title="Feat 4" image="/logo.png" />
      </section>
    </main>
  );
}

function FeatureCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      className="rounded-xl bg-white shadow-sm flex flex-col items-center justify-center aspect-square border hover:shadow-lg transition-all duration-200 overflow-hidden group"
      style={{ borderColor: "rgba(0,0,0,0.1)" }}
    >
      <header className="bg-primary md:py-0.5 h-fit w-full text-center transform transition-transform duration-300 group-hover:scale-x-110">
        <h3 className="text-md md:text-lg text-black">{title}</h3>
      </header>

      <div className="flex-grow flex items-center justify-center w-full">
        <Image
          src={image}
          alt={title}
          width={180}
          height={140}
          className="max-w-[72.5%]"
        />
      </div>
    </div>
  );
}
