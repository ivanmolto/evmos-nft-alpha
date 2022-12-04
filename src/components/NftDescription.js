import { useQuery } from "@tanstack/react-query";

function getDescription(collection) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/tokens/${collection}/nft_metadata/1/?&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

const NftDescription = ({ collection }) => {
  const descriptionQuery = useQuery({
    queryKey: ["description", collection],
    queryFn: () => getDescription(collection),
  });

  const data = descriptionQuery.data;
  if (descriptionQuery.isLoading) return <div>Loading description...</div>;
  if (descriptionQuery.isError)
    return <div>Error: {descriptionQuery.error.message}</div>;
  if (data === null) return null;
  if (data.data === null) return null;
  if (data.data.items === null) return null;
  if (descriptionQuery.isSuccess && data.data.items[0].nft_data === null) {
    return null;
  }
  if (descriptionQuery.isSuccess && data.data.items[0].nft_data !== null)
    return (
      <div className="mt-4 flex items-center">
        <p className="text-lg text-gray-900 sm:text-lg">
          {data.data.items[0].nft_data[0].external_data.description}
        </p>
      </div>
    );
};
export default NftDescription;
