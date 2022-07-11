import { Button, IconBookOpen, Stack, Text } from 'degen'
import React from 'react'

type metadata = {
	etherscan?: 'View on etherscan'
	metadata?: 'View metadata'
	ipfs?: 'View on IPFS'
}

export const DetailLink = () => {
	return (
		<Stack direction="horizontal" align="center" space="2">
			<Button
				as="a"
				size="small"
				prefix={<IconBookOpen color="textPrimary" />}
				variant="transparent"
				href="https://etherscan.io/nft/0x7e6663E45Ae5689b313e6498D22B041f4283c88A/13"
				rel="noreferrer"
			>
				<Text weight="semiBold" color="textSecondary">
					View on Etherscan
				</Text>
			</Button>
		</Stack>
	)
}
