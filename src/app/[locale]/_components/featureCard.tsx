import Image from "next/image";

export default function FeatureCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
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
