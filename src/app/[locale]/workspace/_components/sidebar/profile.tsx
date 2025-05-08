import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex w-full items-center gap-3 rounded-md px-2 py-6">
      <div className="bg-gray-light1 relative h-10 w-10 overflow-hidden rounded-full">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gray h-full w-full p-1.5"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <section className="flex flex-col">
        <h3 className="text-gray text-sm font-semibold">닉네임</h3>
        <b className="text-gray-light1 text-xs font-normal">user@email.com</b>
      </section>
    </div>
  );
}
