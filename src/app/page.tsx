import { Header } from "@/components/domain/layout";
import { LoginToast, FeatureCard } from "./_components";

export default function OnboardingPage() {
  return (
    <main className="h-full flex flex-col bg-gradient-to-b from-primary from-0% via-primary-light via-20% to-white to-50%">
      <LoginToast />

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
