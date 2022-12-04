import { useParams } from "react-router-dom";
import NftMetadata from "./NftMetadata";
import NftTransaction from "./NftTransaction";

const Nft = () => {
  let params = useParams();
  const collectionId = params.collectionId;
  const tokenId = params.tokenId;

  return (
    <div>
      <NftMetadata collection={collectionId} item={tokenId} />
      <NftTransaction collection={collectionId} item={tokenId} />
    </div>
  );
};

export default Nft;
