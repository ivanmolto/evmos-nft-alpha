import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Market from "./components/Market";
import Wallets from "./components/Wallets";
import WalletProfiler from "./components/WalletProfiler";
import Wallet from "./components/Wallet";
import Collections from "./components/Collections";
import CollectionProfiler from "./components/CollectionProfiler";
import Collection from "./components/Collection";
import NftProfiler from "./components/NftProfiler";
import Nft from "./components/Nft";
import NoMatch from "./components/NoMatch";

function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "market", element: <Market /> },
        { path: "walletprofiler", element: <WalletProfiler /> },
        {
          path: "wallets",
          element: <Wallets />,
          children: [
            { path: "", element: <WalletProfiler /> },
            { path: ":addressId", element: <Wallet /> },
          ],
        },
        { path: "collectionprofiler", element: <CollectionProfiler /> },
        { path: "nftprofiler", element: <NftProfiler /> },
        {
          path: "collections",
          element: <Collections />,
          children: [
            { path: "", element: <CollectionProfiler /> },
            { path: ":collectionId", element: <Collection /> },
          ],
        },
        { path: "nfts", element: <NftProfiler /> },
        {
          path: "nfts/:collectionId/:tokenId",
          element: <Nft />,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ]);
}

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
