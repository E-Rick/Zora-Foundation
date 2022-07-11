import { Avatar, Box, Card, IconChevronUp, Stack, Text } from 'degen'
import React from 'react'

export const AuctionWon = () => {
	return (
		<>
			<Box id="auction won section" paddingY="8" paddingBottom="8">
				<Stack justify="center" align="center" space="0">
					<Box marginBottom="4" marginRight="3">
						<Avatar
							label="Avatar"
							src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png"
							size="10"
						/>
					</Box>
					<Stack direction="horizontal" space="2">
						<Text size="base" weight="medium">
							Auction won by
						</Text>
						<Text>@WreCs</Text>
					</Stack>
					<Text weight="bold" size="headingTwo">
						Sold for 2.65 ETH
					</Text>
					<Text color="textSecondary" size="small">
						Jun 11, 2022 at 2:32pm
					</Text>
				</Stack>
			</Box>
			<Box id="auction results pill" paddingBottom="8">
				<Stack direction="horizontal" justify="center">
					<Card shadow hover padding="2" borderRadius="full">
						<Stack direction="horizontal" justify="flex-start" align="center" space="2">
							<Text weight="semiBold">Auction settled by</Text>
							<Text color="textSecondary">@WreCs</Text>
							<IconChevronUp color="text" />
						</Stack>
					</Card>
				</Stack>
			</Box>
		</>
	)
}
