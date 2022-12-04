import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";

function getFileExtension(filename) {
  return filename.split(".").pop();
}

function getMetadata(collection, item) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/tokens/${collection}/nft_metadata/${item}/?&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

const TokenLogo = ({ collection, item }) => {
  const tokenQuery = useQuery({
    queryKey: ["metadata", collection, item],
    queryFn: () => getMetadata(collection, item),
  });

  const data = tokenQuery.data;
  if (tokenQuery.isLoading) return <div>Loading image...</div>;
  if (tokenQuery.isError) return <div>Error: {tokenQuery.error.message}</div>;
  if (
    data === null ||
    data.data === null ||
    data.data.items === null ||
    data.data.items[0].nft_data[0] === null ||
    data.data.items[0].nft_data[0].external_data === null
  )
    return (
      <LazyLoadImage
        src="https://ivanmolto.mypinata.cloud/ipfs/QmSYRfysyk5n5YqMN6Zw2fCZdvZsJvhETmhgQKTdAfPbwb"
        alt="Image not available"
        className="rounded-md"
      />
    );
  if (tokenQuery.isSuccess)
    return (
      <>
        {getFileExtension(
          data.data.items[0].nft_data[0].external_data.image
        ) === "mp4" && (
          <video
            autoPlay
            src={data.data.items[0].nft_data[0].external_data.image}
            type="video/mp4"
          ></video>
        )}

        {getFileExtension(
          data.data.items[0].nft_data[0].external_data.image
        ) !== "mp4" && (
          <LazyLoadImage
            src={
              data.data.items[0].nft_data[0].external_data.image ||
              `https://ivanmolto.mypinata.cloud/ipfs/QmbLmd6Zy7AU5oS9Ww6PyHZamV6QT5rF3yEWTSCvkLxLTk`
            }
            alt="NFT item"
            className="rounded-md"
          />
        )}
      </>
    );
};
export default TokenLogo;
