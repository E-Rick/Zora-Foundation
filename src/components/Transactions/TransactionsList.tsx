import { Avatar, Box, Text, Card, IconArrowRight, Stack } from 'degen'
import React from 'react'

export const TransactionsList = () => {
	return (
		<Stack space="2">
			<Card shadow padding="4">
				<Stack justify="space-between" direction="horizontal" align="center">
					<Stack direction="horizontal">
						<Avatar label="Avatar" src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png" />
						<Stack direction="vertical" space="2" wrap>
							<Stack direction="horizontal" space="1">
								<Text weight="semiBold">Bid placed by</Text>
								<Text color="textSecondary">@WreCs</Text>
							</Stack>

							<Text variant="label">June 11, 2022 at 1:55pm</Text>
						</Stack>
					</Stack>
					<Stack direction="horizontal" space="1">
						<Text size="large" weight="bold">
							1.00 ETH
						</Text>
						<IconArrowRight color="text" />
					</Stack>
				</Stack>
			</Card>
		</Stack>
	)
}
