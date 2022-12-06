import { useQuery } from "@tanstack/react-query";
import TokenLogo from "./TokenLogo";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

function getMetadata(collection, item) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/tokens/${collection}/nft_metadata/${item}/?&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

const NftMetadata = ({ collection, item }) => {
  const metadataQuery = useQuery({
    queryKey: ["metadata", collection, item],
    queryFn: () => getMetadata(collection, item),
  });

  const data = metadataQuery.data;
  if (metadataQuery.isLoading)
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Item
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between md:border-t sm:border-eorange"></div>
              Loading item metadata...
            </div>
          </div>
        </div>
      </div>
    );
  if (metadataQuery.isError)
    return <div>Error: {metadataQuery.error.message}</div>;
  console.log(data);
  if (data === null || data.data === null || data.data.items === null)
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Item
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between md:border-t sm:border-eorange"></div>
              Sorry, no metadata available for this NFT item now
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-50 font-montserrat">
      <div className="mt-1">
        <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          NFT Item
        </h2>
        <div>
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-3 md:flex md:items-center md:justify-between md:border-t sm:border-eorange"></div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-0 sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4">
              <div className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                {data.data.items[0].contract_name || "Collection name n/a"}
                {" ("}
                {data.data.items[0].contract_ticker_symbol}
                {")"}
              </div>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                NFT Item information
              </h2>
              <div className="flex items-center">
                <p className="text-xl text-gray-900 sm:text-3xl font-semibold">
                  {data.data.items[0].nft_data[0].external_data.name ||
                    "Name n/a"}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Owned by{" "}
                  <a
                    href={`https://evm.evmos.org/address/${data.data.items[0].nft_data[0].owner_address}`}
                    rel="noreferrer"
                    target="_blank"
                    alt="Contract address link explorer"
                    className="text-eorange hover:text-eviolet"
                  >
                    <span className="font-semibold">
                      {data.data.items[0].nft_data[0].owner_address.slice(0, 6)}
                      {"..."}
                      {data.data.items[0].nft_data[0].owner_address.slice(-4)}
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Token ID: <span className="font-semibold">{item}</span>
                  <br />
                </p>
              </div>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Contract Address:{" "}
                  <a
                    href={`https://evm.evmos.org/address/${collection}`}
                    rel="noreferrer"
                    target="_blank"
                    alt="Contract address link explorer"
                    className="text-eorange hover:text-eviolet"
                  >
                    <span className="font-semibold">
                      {collection.slice(0, 6)}...{collection.slice(-4)}
                    </span>
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Chain: <span className="font-semibold">Evmos</span>
                </p>
              </div>
              <div></div>

              <div className="mt-2 flex items-center">
                <a
                  href={`https://www.orbitmarket.io/nft/${collection}/${item}`}
                  rel="noreferrer"
                  target="_blank"
                  className="text-base text-eorange hover:text-eviolet inline-flex items-center"
                >
                  View on Orbit Market
                  <ArrowCircleRightIcon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </section>
          </div>
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <TokenLogo collection={collection} item={item} />
            </div>
          </div>
          {data.data.items[0].nft_data[0].external_data.attributes !== null && (
            <div className="mt-2 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="information-heading">
                <h2 className="mb-4 text-lg leading-6 font-medium text-gray-900">
                  Attributes
                </h2>
                <div className="flex-1 flex justify-between lg:max-w-6xl lg:mx-auto">
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 ">
                    {data.data.items[0].nft_data[0].external_data.attributes.map(
                      (attribute, index) => (
                        <li
                          key={index}
                          className="px-2 py-1.5 col-span-1 flex flex-col rounded-lg bg-white text-center shadow"
                        >
                          <div className="font-medium text-sm text-gray-900">
                            {attribute.trait_type}
                          </div>
                          <div className="mt-1 text-sm text-gray-500 truncate">
                            {attribute.value}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NftMetadata;
