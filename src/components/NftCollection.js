import { useQuery } from "@tanstack/react-query";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import NftLogo from "./NftLogo";
import NftDescription from "./NftDescription";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function getCollection(collection) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/tokens/${collection}/nft_token_ids/?&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

const NftCollection = ({ collection }) => {
  const collectionQuery = useQuery({
    queryKey: ["collection", collection],
    queryFn: () => getCollection(collection),
  });

  const data = collectionQuery.data;
  if (collectionQuery.isLoading)
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Collection
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between lg:border-t border-eorange lg:border-eorange"></div>
              Loading collection...
            </div>
          </div>
        </div>
      </div>
    );

  if (collectionQuery.isError)
    return <p>Error: {collectionQuery.error.message}</p>;
  if (
    data === null ||
    data.data === null ||
    data.data.items.length === 0 ||
    data.data.items === null
  )
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Collection
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between lg:border-t border-eorange lg:border-eorange"></div>
              Sorry, no data available for this contract address now
            </div>
          </div>
        </div>
      </div>
    );

  if (collection === "0xabbaa322a763b36587e3f63e46a81deacb2957a7")
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Collection
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between lg:border-t border-eorange lg:border-eorange"></div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl py-2 px-4 sm:py-0 sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:max-w-lg lg:self-end">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Evmos Domains
                </h1>
              </div>
              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Collection information
                </h2>

                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    Items:{" "}
                    <span className="font-semibold">
                      {numberWithCommas(data.data.items.length)}
                    </span>
                    <br />
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    Symbol: <span className="font-semibold">ED</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    Contract Address:{" "}
                    <span className="font-semibold">
                      {collection.slice(0, 6)}...{collection.slice(-4)}
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl">
                    Chain: <span className="font-semibold">Evmos</span>
                  </p>
                </div>
                <NftDescription collection={collection} />
                <div></div>
                <div className="mt-6 space-y-6">
                  <a
                    href={`https://evm.evmos.org/address/${collection}`}
                    rel="noreferrer"
                    target="_blank"
                    className="text-base text-eorange hover:text-eviolet inline-flex items-center"
                  >
                    View on Evmos EVM Explorer{" "}
                    <ArrowCircleRightIcon
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div className="mt-2 flex items-center">
                  <a
                    href={`https://www.orbitmarket.io/collection/${collection}`}
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

                <div className="mt-2 flex items-center">
                  <Link
                    to="/nftprofiler"
                    className="text-base text-eorange hover:text-eviolet inline-flex items-center"
                  >
                    NFT Item Profiler
                    <ArrowCircleRightIcon
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </section>
            </div>
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <NftLogo collection={collection} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  console.log(data);
  return (
    <div className="bg-gray-50 font-montserrat">
      <div className="mt-1">
        <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          NFT Collection
        </h2>
        <div>
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-3 md:flex md:items-center md:justify-between lg:border-t border-eorange lg:border-eorange"></div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-0 sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {data.data.items[0].contract_name || "Collection name n/a"}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Collection information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Items:{" "}
                  <span className="font-semibold">
                    {numberWithCommas(data.data.items.length)}
                  </span>
                  <br />
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Symbol:{" "}
                  <span className="font-semibold">
                    {data.data.items[0].contract_ticker_symbol || "n/a"}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Contract Address:{" "}
                  <span className="font-semibold">
                    {collection.slice(0, 6)}...{collection.slice(-4)}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  Chain: <span className="font-semibold">Evmos</span>
                </p>
              </div>
              <NftDescription collection={collection} />
              <div></div>

              <div className="mt-6 space-y-6">
                <a
                  href="https://evm.evmos.org/address/0x4C275aDE386Af17276834579b1A68146cef3C770"
                  rel="noreferrer"
                  target="_blank"
                  className="text-base text-eorange hover:text-eviolet inline-flex items-center"
                >
                  View on Evmos EVM Explorer{" "}
                  <ArrowCircleRightIcon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-2 flex items-center">
                <a
                  href="https://www.orbitmarket.io/collection/0x4c275ade386af17276834579b1a68146cef3c770"
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

              <div className="mt-2 flex items-center">
                <Link
                  to="/nftprofiler"
                  className="text-base text-eorange hover:text-eviolet inline-flex items-center"
                >
                  NFT Item Profiler
                  <ArrowCircleRightIcon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>
          </div>
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <NftLogo collection={collection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCollection;
