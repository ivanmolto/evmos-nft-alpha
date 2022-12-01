import { Link } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/solid";
import { LazyLoadImage } from "react-lazy-load-image-component";

const overview = [
  {
    name: "Orbital Apes",
    contract: "0x4c275ade386af17276834579b1a68146cef3c770",
    description:
      "A collection of 10,000 NFTs coming to EVMOS. Each Orbital Ape created from a high quality 3D generation consisting of over 200 different attributes",
    tags: ["pfp", "3d", "utility"],
    twitter: "https://twitter.com/OrbitalApes",
    web: "https://orbitalapes.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmPXuAhFH2tGiDuaYn6HYemyaHxS2JCGZDa9vg1kvtEs1U",
  },
  {
    name: "Orbital Apes Limited",
    contract: "0xa05e4ae95fb9b32fcd80ffd6c275db8b0842883b",
    description:
      "Exclusive and time limited Orbital Ape Secondary Collection. A reward to delegators through $OAV",
    tags: ["pfp", "3d"],
    twitter: "https://twitter.com/OrbitalApes",
    web: "https://orbitalapes.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmcRM92BGzmbZpkyS1BWLgUTLAkxmWvVq4FfPqmaQ8aE21",
  },
  {
    name: "Honorary Orbital Apes",
    contract: "0xcce4071459c70465428e1f03d0f381b4f4ea04af",
    description: "Honorary members of Orbital Apes",
    tags: ["pfp", "3d"],
    twitter: "https://twitter.com/OrbitalApes",
    web: "https://orbitalapes.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmNuFzPHnHTzee43guEqSo9PHn9gTKYUoTQv2PoxxqYRMh",
  },
  {
    name: "Planet NFT",
    contract: "0x32c8e6e1ad9d356f1b010cca8de00c11510e8470",
    description:
      "SpaceFi is a cross-chain web3 platform on Evmos and zkSync. Planet NFT is a pass to the ecosystem, with STAR and rights",
    tags: ["utility"],
    twitter: "https://twitter.com/spacefi_io",
    web: "https://www.spacefi.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmTy8iRyKqcDsfQms1FD7G4du3MYTw4HHDS4oY3C6MrLqS",
  },
  {
    name: "Evmos Guardians",
    contract: "0x6d58cbb9104be5666e856983eab1cf8b0237c75e",
    description: "Collection of 7777 unique NFTs on EVMOS chain",
    tags: ["pfp", "utility"],
    twitter: "https://twitter.com/EvmosGuardians",
    web: "https://evmosguardians.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmQWNwmQrnd8ZGZnLCoo3FctRk5P6comz99Ab9SguYgpNr",
  },
  {
    name: "Momentum Hackathon",
    contract: "0x8a00a3155b1d97486f5471c372623cf52577be05",
    description: "Honorary Participants of Evmos Momentum Hackathon 2022",
    tags: ["pfp"],
    twitter: "https://twitter.com/huobi_incubator",
    web: "https://www.huobi.co.ma/huobiincubator/",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmRWrerPP8tbiWJcXrSUS8Te3F9bobX2FtAj9PVwcVNfPx",
  },
  {
    name: "Evmos Domains",
    contract: "0xabbaa322a763b36587e3f63e46a81deacb2957a7",
    description:
      "Evmos Domains lets you register your own human-readable .evmos domain names that link, or 'resolve', to addresses on the Evmos blockchain",
    tags: ["domains", "utility"],
    twitter: "https://twitter.com/EvmosDomains",
    web: "https://evmos.domains/",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmY99grk3wRDKpJMGLNND6YZkxpYj6f7wyLSeT5qjpxUJr",
  },
  {
    name: "BoredOSApes",
    contract: "0x31782794fd38803e16bc4d7c504cf31e8e6dd282",
    description:
      "9,999 unique and algorithmically generated Bored Apes migrating on to EVMOS blockchain",
    tags: ["pfp", "utility", "pixel art"],
    twitter: "https://twitter.com/BoredOSApes",
    web: "https://boredosapes.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmPE12pWzNsaFYQUwdPXVXZKigTRH5qpZaTbcpPGaZ4mYX",
  },
  {
    name: "evBirds",
    contract: "0xf2e8a8509ab69af07c7b3636a1db8d2b600e0572",
    description:
      "The MoonBirds of the EVMOS Network. Collection of 2500 crazy Birds",
    tags: ["pfp", "utility"],
    twitter: "https://twitter.com/evBirdsNFT",
    web: "https://evbirds.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmRspCzAav2ahmffF3eL7gn12U9ejPG93vz6e9xQ7y6vxQ",
  },
  {
    name: "Evmos Invaders",
    contract: "0xe96cecc1c15ca7d80fb76ba74727a1c39e28b1db",
    description: "Collection of 777 unique NFTs on EVMOS chain",
    tags: ["pfp"],
    twitter: "https://twitter.com/EvmosGuardians",
    web: "https://www.evmosguardians.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmS2T2AWkxGLWTVgXNuvaW9AgqQ5d3bQ3vAi6qprWuNGYa",
  },
  {
    name: "OSPunks",
    contract: "0x5e19a7606f91283038bb4ea4b2afed2c98cdb0a2",
    description:
      "10000 Original Punks on the Evmos Chain. They have fallen from the cosmos and are ready to invade the EVM space",
    tags: ["pfp", "pixel art"],
    twitter: "https://twitter.com/EvmOSPunks",
    web: "https://ospunks.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmfM6s95bYH4ncurkrS66ZXkZhYPGu8ZuzTJX4wNzYkJsK",
  },
  {
    name: "Crypto Renaissance I",
    contract: "0x03f4ee9eac9c86ac001824166c6d269abac1f83d",
    description:
      "Crypto Renaissance is the first generative art project from the mind of CREvmos",
    tags: ["pfp"],
    twitter: "https://twitter.com/crevmos",
    web: "https://crevmos.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmXd4ovtvTUfFcRdEhrTKRVYJpRtCoNH3jYrWU2ieZZgKU",
  },
  {
    name: "Honorary Guardians",
    contract: "0x0ec23669dad631a159f66c865beb60266b16d157",
    description: "Honorary Guardians designed for special events",
    tags: ["pfp", "utility"],
    twitter: "https://twitter.com/EvmosGuardians",
    web: "https://evmosguardians.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmbjqeaqFs9EADLqYDef2jMvyHr5mdxAF3BxG6tZuP1h9D",
  },
  {
    name: "The Power of the Rings",
    contract: "0x137b4f8ec6f49a831c43cd306c12c08412d039f2",
    description:
      "The rings of power will give infinite access to the cryptographic world to everyone who has a ring. There are only 1,000 rulers",
    tags: ["pfp"],
    twitter: "https://twitter.com/rings_powers",
    web: "https://thepoweroftherings.xyz",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmdyGG7xjHC95pfaEan3tsiVfsQ9TFgXkYeQh6TB5Y9nAK",
  },
  {
    name: "EVMOS Cadets",
    contract: "0x2bcb6be17f975423af354d5f878c2d7c94e17c42",
    description: "3,000 EVMOS Cadets taking off into the Cosmos!",
    tags: ["pfp"],
    twitter: "https://twitter.com/evmoscadets",
    web: "https://www.evmoscadets.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmcmRoiYLvkzHmiTjfF2wVKEua7UxJhGpiFt2FnANB714y",
  },
  {
    name: "OS Toadz",
    contract: "0x348118c75b91a8a95d47d3a0da7c2d619a8deed4",
    description:
      "OS Toadz is the first collection of 10,000 Stylish Toadz made up of more than 100+ different traits on EVMOS Blockchain",
    tags: ["pfp"],
    twitter: "https://twitter.com/OSToadz",
    web: "https://ostoadz.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmYbU9N2jZK7TAg38brbJX1oLuhwJ2i16TERk5JQi24amd",
  },
  {
    name: "Evmos Aliens",
    contract: "0x6ad439c980d6eee165a256d1026cc98d9739d6bf",
    description:
      "Evmos Aliens is a generative collection of 2,999 unique aliens in Evmos Blockchain and Cosmos Ecosystem. This is a community project",
    tags: ["pfp"],
    twitter: "https://twitter.com/EvmosAliens",
    web: "https://www.evmosaliens.net",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmZhn1cy328UF5NszbCL8x3iqtDyhHP26M3cB1EFrEZs8Z",
  },
  {
    name: "EVbits",
    contract: "0x9c0023f5317a70de48716a488ffc59ee0c6c7d1b",
    description:
      "The #EVbits are 1,001 unique 3D #NFTs voxel characters, created by a custom generative algorithm on $Evmos chain",
    tags: ["pfp", "3d"],
    twitter: "https://twitter.com/EVbitsNFT",
    web: "https://evbits.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmbVz5THmeWWy5jxqDCxGiRYLHbjS7h7B6JFeGfDZ8USmK",
  },
  {
    name: "Evmos Mfers",
    contract: "0xb19da44293147ad2dd0ea3ded47949d2971a3818",
    description: "First mfers exploring evmos blockchain!",
    tags: ["pfp", "pixel art"],
    twitter: "https://twitter.com/evmos_mfers",
    web: "https://evmfers.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmT7kmwHTf3vRfK4qxbkTH1FyKBy4RQdq7wqyMvDN3fvUu",
  },
  {
    name: "Evmos Alpha Pass",
    contract: "0xb8582757ef0fe0e68e7e7d0c1c1ea96e66907b63",
    description: "A collection of 300 exclusive Alpha Pass for Evmos Nfts",
    tags: ["utility"],
    twitter: "https://twitter.com/EvmosAlphaPass",
    web: "https://www.evmosalpha.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmQbidE3c9mWQAew7KxeJA85PAHsL4owbSCcx3E8N2Hqrb",
  },
  {
    name: "Official PageDAO Membership",
    contract: "0xc1d5224bd38e79042037ea75f908a22275669691",
    description:
      "Official PageDAO Membership NFT grants access to mint NFTBooks",
    tags: ["utility"],
    twitter: "https://twitter.com/page_dao",
    web: "https://pagedao.org",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmUkUDzrwKAdNDpLDSBDutkcSYbk2haHZ2YRfxrGAf9HVd",
  },
  {
    name: "Evmosians",
    contract: "0xc9a295cd47c2812d1492919e9140863ab4a1bcb5",
    description:
      "Evmosians NFTs collections will consist of many races and creatures. Each collection will have its own meaning and value",
    tags: ["pfp"],
    twitter: "https://twitter.com/evmosians",
    web: "https://www.evmosians.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmecPzhuebjTC1a53QMHadpR9LFBGgf1gVHg4NR64jyKEr",
  },
  {
    name: "Bored Puppets Yacht Club",
    contract: "0xcaa087e6531fb9aaae423e439da522ccd8d57b97",
    description:
      "A collection of 9,999 unique Bored Puppets NFTs— unique digital collectibles living across all EVM blockchains",
    tags: ["pfp"],
    twitter: "https://twitter.com/boredpuppetsnft",
    web: "https://evmos.boredpuppetsyachtclub.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmXiCwtRiVm2EABReMy34BaRk6GmucFuyhR1GR7WPgEJdQ",
  },
  {
    name: "Evmos Rocks",
    contract: "0xd72ef54da083c7610bc517a9091bd85cbd98694d",
    description:
      "100 right facing rocks with innovative upside down technology",
    tags: ["pfp"],
    twitter: "https://twitter.com/NftImmutable",
    web: "https://evmos.rocks",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmY2gWaMcvG3S9AoJoVnkJUxwCsSF6XvLPHfjHFGAAasr3",
  },
  {
    name: "Covalent x Evmos",
    contract: "0xedf6e953f0ecfc10aee6d3a8508b5fbe14b94a2c",
    description:
      "Commemorating Evmos' integration with Covalent with these special edition NFTs!",
    tags: ["3d"],
    twitter: "https://twitter.com/Covalent_HQ",
    web: "https://www.covalenthq.com",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmXssNYBiSWDFLFWBBsPZkVtNp9PWx9h6sVnJ6vdNtqGVq",
  },
  {
    name: "EvSquitos",
    contract: "0xfffb7b3f37f640b263c36e53b41507dfd0b51b4a",
    description:
      "2,500 randomly de-generated NFTs in the EVMOS network. EvSquitos ready to disrupt your sweet dreams. Join the Resistance!",
    tags: ["pfp"],
    twitter: "https://twitter.com/EvSquitosNFT",
    web: "https://evsquitos.io",
    imageUrl:
      "https://ivanmolto.mypinata.cloud/ipfs/QmSMNjG98MyeXXUekfpNPPkmyVBFBiegHGi3N9x2aHgdmC",
  },
];

const Market = () => {
  return (
    <div className="bg-gray-50 font-montserrat">
      <div className="mt-1">
        <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-inter font-medium text-sky-400 sm:px-6 lg:px-8">
          NFT Market Overview
        </h2>
        <div>
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-3 md:flex md:items-center md:justify-between sm:border-t border-eorange lg:border-eorange"></div>
          </div>
        </div>
        <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {overview.map((collection, index) => (
              <li
                key={index}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:shadow-xl"
              >
                <div className="flex flex-1 flex-col p-8">
                  <Link to={`/collections/${collection.contract}`}>
                    <LazyLoadImage
                      className="mx-auto h-32 w-32 flex-shrink-0 rounded-full hover:scale-125"
                      alt=""
                      src={collection.imageUrl}
                    />
                  </Link>
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {collection.name}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Description</dt>
                    <dd className="text-sm text-gray-500">
                      {collection.description}
                    </dd>
                    <dt className="sr-only">Tag</dt>
                    <dd className="mt-3">
                      {collection.tags.map((tag) => (
                        <span
                          key={tag}
                          className="ml-2 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={collection.twitter}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-400 hover:text-gray-700"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="mr-4 h-6 w-6 "
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={collection.web}
                        rel="noreferrer"
                        target="_blank"
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-400 hover:text-gray-700"
                      >
                        <GlobeAltIcon className="h-5 w-5 " aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Market;
