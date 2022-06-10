import {APP_NAME} from "@/lib/consts";
import {darkTheme, getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {infuraProvider} from "wagmi/providers/infura";
import "../styles/globals.css";

// Configure the chains for Rainbowkit
const {chains, provider} = configureChains(
	[chain.mainnet, chain.rinkeby],
	[infuraProvider({infuraId: process.env.INFURA_ID})]
);

// Setup the appName and default wallets for Rainbowkit
const {connectors} = getDefaultWallets({
	appName: APP_NAME,
	chains,
});

// Create the Wagmi Client with the wallet connectors and providers
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

// Create a react-query QueryClient for GraphQL calls
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
