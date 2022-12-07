import { useQuery } from "@tanstack/react-query";
import {
  ChevronRightIcon,
  ShoppingCartIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";

function getTransaction(collection, item) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(
    `https://api.covalenthq.com/v1/9001/tokens/${collection}/nft_transactions/${item}/?&key=${process.env.REACT_APP_COVALENT_SECRET_KEY}`,
    options
  ).then((response) => response.json());
}

const NftTransaction = ({ collection, item }) => {
  const transactionQuery = useQuery({
    queryKey: ["transaction", collection, item],
    queryFn: () => getTransaction(collection, item),
  });

  const data = transactionQuery.data;
  if (transactionQuery.isLoading)
    return (
      <div className="min-h-full font-montserrat">
        <main className="flex-1 pb-8">
          <div className="mt-4 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            Loading recent activity...
          </div>
        </main>
      </div>
    );
  if (transactionQuery.isError)
    return <div>Error: {transactionQuery.error.message}</div>;
  if (
    data === null ||
    data.data === null ||
    data.data.items === null ||
    data.data.items[0].nft_transactions === null ||
    data.data.items[0].nft_transactions.length === 0 ||
    typeof data.data.items[0].nft_transactions === "undefined"
  )
    return (
      <div className="min-h-full font-montserrat">
        <main className="flex-1 pb-8">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            Sorry, no transactions data available for this NFT item now
          </div>
        </main>
      </div>
    );
  return (
    <>
      <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
        Recent activity
      </h2>
      <div className="shadow sm:hidden">
        <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          {data.data.items[0].nft_transactions.map((transaction, index) => (
            <li key={index}>
              <a
                href={`https://evm.evmos.org/tx/${transaction.tx_hash}`}
                rel="noreferrer"
                target="_blank"
                className="block bg-white px-4 py-4 hover:bg-gray-50 "
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    {transaction.value_quote === 0 && (
                      <>
                        <SwitchHorizontalIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col truncate text-sm text-gray-500 ">
                          <span className="truncate">Transfer</span>

                          <time dateTime={transaction.datetime}>
                            {transaction.block_signed_at.substring(0, 10)}
                          </time>
                        </span>
                      </>
                    )}
                    {transaction.value_quote !== 0 && (
                      <>
                        <ShoppingCartIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col truncate text-sm">
                          <span className="truncate">Sale</span>
                          <span>
                            <span className="font-medium text-gray-400">
                              {"$" + transaction.value_quote.toFixed(2)}
                            </span>
                          </span>
                          <time dateTime={transaction.datetime}>
                            {transaction.block_signed_at.substring(0, 10)}
                          </time>
                        </span>
                      </>
                    )}
                  </span>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-eorange hover:text-eviolet"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden sm:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 flex flex-col">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      className="bg-gray-100 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Transaction
                    </th>
                    <th
                      className=" bg-gray-100 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      From
                    </th>
                    <th
                      className=" bg-gray-100 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      To
                    </th>
                    <th
                      className="hidden bg-gray-100 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:block"
                      scope="col"
                    >
                      Amount
                    </th>
                    <th
                      className="bg-gray-100 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.data.items[0].nft_transactions.map(
                    (transaction, index) => (
                      <tr key={index} className="bg-white">
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 ">
                          <div className="flex">
                            <a
                              href={`https://evm.evmos.org/tx/${transaction.tx_hash}`}
                              rel="noreferrer"
                              target="_blank"
                              className="group inline-flex space-x-2 truncate text-sm hover:text-eorange"
                            >
                              {transaction.value_quote === 0 && (
                                <>
                                  <SwitchHorizontalIcon
                                    className="h-5 w-5 flex-shrink-0 text-eorange group-hover:text-eviolet"
                                    aria-hidden="true"
                                  />
                                  <p className="truncate text-eorange group-hover:text-eviolet">
                                    Transfer
                                  </p>
                                </>
                              )}
                              {transaction.value_quote !== 0 && (
                                <>
                                  <ShoppingCartIcon
                                    className="h-5 w-5 flex-shrink-0 text-eorange group-hover:text-eviolet"
                                    aria-hidden="true"
                                  />
                                  <p className="truncate text-eorange group-hover:text-eviolet">
                                    Sale
                                  </p>
                                </>
                              )}
                            </a>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500">
                          <a
                            href={`https://evm.evmos.org/address/${transaction.from_address}`}
                            rel="noreferrer"
                            target="_blank"
                            className="text-eorange hover:text-eviolet"
                          >
                            {transaction.from_address.slice(0, 6)}
                            {"..."}
                            {transaction.from_address.slice(-4)}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-left text-sm text-gray-500">
                          <a
                            href={`https://evm.evmos.org/address/${transaction.to_address}`}
                            rel="noreferrer"
                            target="_blank"
                            className="text-eorange hover:text-eviolet"
                          >
                            {transaction.to_address.slice(0, 6)}
                            {"..."}
                            {transaction.to_address.slice(-4)}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          {transaction.value_quote !== 0 &&
                            "$" + transaction.value_quote.toFixed(2)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <time dateTime={transaction.datetime}>
                            {transaction.block_signed_at.substring(0, 10)}
                          </time>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="mb-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftTransaction;
