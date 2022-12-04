import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CollectionProfiler = () => {
  const [collection, setCollection] = useState("");
  let navigate = useNavigate();

  const collectionChangeHandler = (event) => {
    setCollection(event.target.value.toLowerCase());
  };

  async function submitHandler(event) {
    event.preventDefault();
    navigate(`/collections/${collection}`, { replace: true });
    setCollection("");
  }

  return (
    <div className="font-montserrat">
      <main className="flex-1 flex-col pb-8">
        <div className="mt-1">
          <h2 className="max-w-6xl mx-auto mt-0 px-1 text-lg leading-6 font-medium text-sky-400 sm:px-6 lg:px-8">
            NFT Collection Profiler
          </h2>
          <div>
            <div className="px-1 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-3 md:flex md:items-center md:justify-between lg:border-t border-eorange lg:border-eorange"></div>
            </div>
          </div>
          <div className="flex-1 px-1 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <form
              onSubmit={submitHandler}
              className="space-y-8 divide-y divide-gray-200"
            >
              <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <div>
                    <h3 className="text-base leading-6 font-medium text-gray-900">
                      Fill in the inputs to see the NFT collection
                    </h3>
                  </div>

                  <div className="sm:col-span-3 mt-4">
                    <label
                      htmlFor="nftaddress"
                      className="block text-sm font-medium text-gray-900"
                    >
                      NFT collection address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        value={collection}
                        onChange={collectionChangeHandler}
                        name="nftaddress"
                        id="nftaddress"
                        autoComplete="nftaddress"
                        placeholder="0x..."
                        className="shadow-sm focus:ring-eorange focus:border-eorange block w-full sm:text-sm border-eorange rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-44 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-eorange hover:bg-eviolet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eorange"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CollectionProfiler;
