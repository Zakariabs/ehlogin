import * as React from "react";
import Link from 'next/link';

type CardProps = {
  src: string;
  alt: string;
  title: string;
  link: string; // Added link prop
};

const Card: React.FC<CardProps> = ({ src, alt, title, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center px-16 pt-10 pb-20 mt-14 bg-red-400 rounded-xl shadow-sm max-w-[310px] cursor-pointer">
        <div className="flex flex-col">
          <img loading="lazy" src={src} alt={alt} className="self-center w-full aspect-square" />
          <h2 className="mt-4 text-center text-xl text-black">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

const MyComponent: React.FC = () => {
  const cardsData = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2232ec1391f825946cdadd64ee1820126067305da7df8966ea6fbada8d55d82d?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&",
      alt: "Student of docent",
      title: "Student of docent",
      link: "protected/user" // Link to the user folder
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2be356d8ed409941efcc7541e4dd04dd9ee21c4d4c761f726b9d6f0652cabc7?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&",
      alt: "Admin",
      title: "Admin",
      link: "protected/admin" // Link to the admin folder
    }
  ];

  return (
    <div className="flex flex-col items-center pb-20 mx-auto w-full bg-white rounded-3xl max-w-[480px]">
      <header className="flex gap-5 justify-between items-start px-5 py-4 mt-1 max-w-full w-[375px]">
        <time dateTime="09:41" className="text-sm font-black tracking-tight text-center text-black">
          9:41
        </time>
        <div className="flex gap-2.5">
          <div className="flex gap-1.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c673575c62ac459d0538e5ba7866bd02474ae86e66545b068b3d485ab4399298?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&" alt="Signal icon" className="shrink-0 aspect-[1.69] fill-black w-[17px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a152450cba5e7623b0f27b79d2856a17146a75f145a27dd6439e16e9555922de?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&" alt="WiFi icon" className="shrink-0 aspect-[1.49] fill-black w-[15px]" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5ce23bdfa5f25106afc82b2b8dd67114517b70b2d58cee310b89671751d1b9c?apiKey=68df3d9a90eb4ff29acb54c0a32a8ffa&" alt="Battery icon" className="shrink-0 aspect-[2.22] w-[22px]" />
        </div>
      </header>
      <h1 className="mt-5 text-2xl font-semibold text-black">ONZICHTBAAR</h1>
      <main className="flex flex-col items-center px-2.5 mt-5 w-full text-center text-xl text-black">
        <hr className="shrink-0 self-stretch h-px border border-solid bg-neutral-200 border-neutral-200" />
        {cardsData.map((card, index) => (
          <Card key={index} src={card.src} alt={card.alt} title={card.title} link={card.link} />
        ))}
      </main>
    </div>
  );
};

export default MyComponent;
