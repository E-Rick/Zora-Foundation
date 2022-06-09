import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {getDefaultWallets, RainbowKitProvider, darkTheme} from "@rainbow-me/rainbowkit";
import {chain, createClient, WagmiConfig, configureChains} from "wagmi";
import {infuraProvider} from "wagmi/providers/infura";

const {chains, provider} = configureChains(
	[chain.mainnet, chain.rinkeby],
	[infuraProvider({infuraId: process.env.INFURA_ID})]
);

const {connectors} = getDefaultWallets({
	appName: "WRECS",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

// Create a client for GraphQL calls
const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				chains={chains}
				theme={darkTheme({
					accentColor: "#cb9e59ff",
					borderRadius: "small",
				})}
			>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={true} />
					<Component {...pageProps} />;
				</QueryClientProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
