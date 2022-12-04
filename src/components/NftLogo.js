import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";

const fallbackImage = {
  na: "https://ivanmolto.mypinata.cloud/ipfs/QmSYRfysyk5n5YqMN6Zw2fCZdvZsJvhETmhgQKTdAfPbwb", // "https://ivanmolto.mypinata.cloud/ipfs/QmdqYqXFr2UsiDG454qESUsTfmAtm1hqmteSfiWhVXoGKL",
  bored:
    "https://ivanmolto.mypinata.cloud/ipfs/QmQdgiy2EqCSJNv1PcxXNBuLZjgUz4i35M94yfEbL13m2T",
  pdao: "https://ivanmolto.mypinata.cloud/ipfs/Qmchyp2Fc6KKS62CUtssqyShjYSdGB1AU5X8eCV7Gpfwdu",
  toadz:
    "https://ivanmolto.mypinata.cloud/ipfs/QmbGYjLW5Kwr7Bm2QuWuVVTCRfcSZEZHiQhtHA6uS4Yvcz",
  domains:
    "https://ivanmolto.mypinata.cloud/ipfs/QmaHo1Bw2KCVvGUKisPTPDCnaiB8awjkiAac8uk6DPBKio",
};

function getFileExtension(filename) {
  return filename.split(".").pop();
}

function getLogo(collection) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/tokens/${collection}/nft_metadata/1/?&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

const NftLogo = ({ collection }) => {
  const logoQuery = useQuery({
    queryKey: ["logo", collection],
    queryFn: () => getLogo(collection),
  });

  const data = logoQuery.data;
  if (logoQuery.isLoading) return <div>Loading image...</div>;
  if (logoQuery.isError) return <div>Error: {logoQuery.error.message}</div>;
  if (data === null || data.data === null || data.data.items === null)
    return (
      <LazyLoadImage
        src={`https://ivanmolto.mypinata.cloud/ipfs/QmbLmd6Zy7AU5oS9Ww6PyHZamV6QT5rF3yEWTSCvkLxLTk`}
        alt="No image available"
        className="rounded-md"
      />
    );
  if (collection === "0xabbaa322a763b36587e3f63e46a81deacb2957a7")
    return (
      <div className="h-full w-full object-cover object-center">
        <LazyLoadImage
          src={fallbackImage.domains}
          alt="Collection First NFT"
          className="rounded-md"
        />
      </div>
    );
  if (collection === "0x6ad439c980d6eee165a256d1026cc98d9739d6bf")
    return (
      <div className="h-full w-full object-cover object-center">
        <LazyLoadImage
          src={fallbackImage.na}
          alt="Collection First NFT"
          className="rounded-md"
        />
      </div>
    );
  if (collection === "0x0ec23669dad631a159f66c865beb60266b16d157")
    return (
      <div className="h-full w-full object-cover object-center">
        <LazyLoadImage
          src={fallbackImage.na}
          alt="Collection First NFT"
          className="rounded-md"
        />
      </div>
    );
  if (collection === "0x31782794fd38803e16bc4d7c504cf31e8e6dd282")
    return (
      <div className="h-full w-full object-cover object-center">
        <LazyLoadImage
          src={fallbackImage.bored}
          alt="Collection First NFT"
          className="rounded-md"
        />
      </div>
    );
  if (collection === "0x348118c75b91a8a95d47d3a0da7c2d619a8deed4")
    return (
      <div className="h-full w-full object-cover object-center">
        <LazyLoadImage
          src={fallbackImage.toadz}
          alt="Collection First NFT"
          className="rounded-md"
        />
      </div>
    );
  if (collection === "0xc1d5224bd38e79042037ea75f908a22275669691")
    return (
      <div className="h-full w-full object-cover object-center">
        <LazyLoadImage
          src={fallbackImage.pdao}
          alt="Collection First NFT"
          className="rounded-md"
        />
      </div>
    );

  if (logoQuery.isSuccess)
    return (
      <div>
        {getFileExtension(
          data.data.items[0].nft_data[0].external_data.image
        ) === "mp4" && (
          <video
            autoPlay
            src={data.data.items[0].nft_data[0].external_data.image}
            type="video/mp4"
          ></video>
        )}

        {collection !== "0xc1d5224bd38e79042037ea75f908a22275669691" &&
          getFileExtension(
            data.data.items[0].nft_data[0].external_data.image
          ) !== "mp4" && (
            <LazyLoadImage
              src={
                data.data.items[0].nft_data[0].external_data.image ||
                `https://ivanmolto.mypinata.cloud/ipfs/QmbLmd6Zy7AU5oS9Ww6PyHZamV6QT5rF3yEWTSCvkLxLTk`
              }
              alt="Collection First NFT"
              className="rounded-md"
            />
          )}
      </div>
    );
};

export default NftLogo;
