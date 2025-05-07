import Image from 'next/image';

export default function FeatureCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      className="group flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200 hover:shadow-lg"
      style={{ borderColor: 'rgba(0,0,0,0.1)' }}
    >
      <header className="bg-primary h-fit w-full transform text-center transition-transform duration-300 group-hover:scale-x-110 md:py-0.5">
        <h3 className="text-md text-black md:text-lg">{title}</h3>
      </header>

      <div className="flex w-full flex-grow items-center justify-center">
        <Image src={image} alt={title} width={180} height={140} className="max-w-[72.5%]" />
      </div>
    </div>
  );
}
