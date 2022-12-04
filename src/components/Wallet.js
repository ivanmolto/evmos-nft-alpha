import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function getWallet(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

function WalletCollection({ address }) {
  const walletQuery = useQuery(["wallet"], () => getWallet(address));

  const data = walletQuery.data;
  if (walletQuery.isLoading)
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Wallet Portfolio
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between md:border-t sm:border-eorange"></div>
              Loading NFT balance...
            </div>
          </div>
        </div>
      </div>
    );
  if (walletQuery.isError) return <p>Error: {walletQuery.error.message}</p>;
  console.log(data);
  if (data.data === null)
    return (
      <div className="bg-gray-50 font-montserrat">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            NFT Wallet Portfolio
          </h2>
          <div>
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between md:border-t sm:border-eorange"></div>
              Sorry, no data available for this wallet address now
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-50 font-montserrat">
      <div className="mt-1">
        <h2 className="max-w-6xl mx-auto mt-0 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          NFT Wallet Portfolio
        </h2>
        <div>
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-3 md:flex md:items-center md:justify-between sm:border-t sm:border-eorange"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div>
          <div className="mb-8 inline-flex">
            <img
              className="hidden h-32 w-32 rounded-full sm:block"
              src={`https://cdn.stamp.fyi/avatar/${address}?s=256`}
              alt={address}
            />
            <a
              href={`https://evm.evmos.org/address/${address}`}
              rel="noreferrer"
              target="_blank"
              className="ml-8 mt-12 text-eorange hover:text-eviolet"
            >
              {address}
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {data.data.items.map(
              (item, index) =>
                item.type === "nft" && (
                  <Link
                    to={`/nfts/${item.contract_address}/${item.nft_data[0].token_id}`}
                  >
                    <li
                      key={index}
                      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow hover:shadow-xl"
                    >
                      <div className="flex flex-1 flex-col p-1">
                        <LazyLoadImage
                          className="mx-auto h-full w-full flex-shrink-0 rounded-t-md"
                          alt="NFT item"
                          src={item.nft_data[0].external_data.image}
                        />

                        <div className="mt-4 justify-start text-lg truncate">
                          {item.nft_data[0].external_data.name ||
                            item.nft_data[0].token_id}
                        </div>
                        <div className="mt-4 justify-start text-lg truncate">
                          {item.contract_name || "n/a"}
                        </div>
                      </div>
                    </li>
                  </Link>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Wallet = () => {
  let params = useParams();
  const addressId = params.addressId;

  return (
    <div>
      <WalletCollection address={addressId} />
    </div>
  );
};

export default Wallet;
