import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {getDefaultWallets, RainbowKitProvider, darkTheme} from "@rainbow-me/rainbowkit";
import {chain, createClient, WagmiConfig, configureChains} from "wagmi";
import {infuraProvider} from "wagmi/providers/infura";

const {chains, provider} = configureChains(
	[chain.mainnet],
	[infuraProvider({infuraId: process.env.INFURA_ID})]
);

const {connectors} = getDefaultWallets({
	appName: "ZORBs",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

// Create a client
const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				chains={chains}
				theme={darkTheme({
					accentColor: "#1585c6",
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
