import { useParams } from "react-router-dom";
import NftCollection from "./NftCollection";

const Collection = () => {
  let params = useParams();
  const collectionId = params.collectionId;

  return (
    <div>
      <NftCollection collection={collectionId} />
    </div>
  );
};

export default Collection;
