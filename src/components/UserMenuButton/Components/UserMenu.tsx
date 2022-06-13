import { Box, Card, Stack, Avatar, IconArrowRight, Tag, Button, IconCode, Text } from 'degen'
import React from 'react'

/**
 * Toogles the User Menu in the Navigation Bar and pops up a tooltip
 * Remains active until button is clicked again.
 * @returns
 */
export const UserMenu = () => {
	return (
		<Box id="navigation profile tippy component" padding="6">
			<Card padding="3" shadow width="96">
				<Box id="Profile button" marginBottom="2">
					<Box paddingY="4" paddingX="3">
						<Stack direction="horizontal" justify="space-between" align="center">
							<Stack direction="horizontal" align="center">
								<Avatar
									label="Avatar"
									src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png"
									size="12"
								/>
								<Stack space="2">
									<Text size="large" weight="medium">
										Profile
									</Text>
									<Text size="small" color="textSecondary">
										@WreCs
									</Text>
								</Stack>
							</Stack>
							<IconArrowRight color="text" />
						</Stack>
					</Box>
				</Box>
				<Box>
					<Box id="balance section" borderWidth="0.375" borderRadius="medium" marginBottom="3">
						<Stack justify="space-between" direction="horizontal" align="center">
							<Box borderBottomWidth="0.375" marginX="4" marginTop="3" paddingBottom="4" width="full">
								<Stack space="0">
									<Stack direction="horizontal" justify="space-between" align="center">
										<Text weight="medium" color="textTertiary" variant="base">
											Balance
										</Text>
										<Tag hover tone="green">
											0xf153...3F9e
										</Tag>
									</Stack>
									<Text variant="large" weight="semiBold">
										0.0535 ETH
									</Text>
								</Stack>
							</Box>
						</Stack>
						<Stack justify="space-between" direction="horizontal" align="center">
							<Box paddingX="4" paddingY="3" width="full">
								<Stack direction="horizontal" align="center" justify="space-between">
									<Stack space="1">
										<Stack direction="horizontal" justify="space-between" align="center">
											<Text weight="medium" color="textTertiary" variant="base">
												Offer Balance
											</Text>
										</Stack>
										<Text variant="extraLarge" weight="semiBold">
											0.0535 ETH
										</Text>
									</Stack>
									<IconArrowRight color="text" />
								</Stack>
							</Box>
						</Stack>
					</Box>

					<Stack>
						<Button
							center
							prefix={
								<Stack direction="horizontal" space="5">
									<IconCode color="text" />{' '}
									<Text weight="semiBold" size="large">
										Settings
									</Text>
								</Stack>
							}
							suffix={<IconArrowRight color="text" />}
							width="full"
							variant="transparent"
						></Button>
						<Button
							center
							prefix={
								<Stack direction="horizontal" space="5">
									<IconCode color="text" />{' '}
									<Text weight="semiBold" size="large">
										Help
									</Text>
								</Stack>
							}
							suffix={<IconArrowRight color="text" />}
							width="full"
							variant="transparent"
						></Button>
						<Button
							center
							prefix={
								<Stack direction="horizontal" space="5">
									<IconCode color="text" />{' '}
									<Text weight="semiBold" size="large">
										Disconnect
									</Text>
								</Stack>
							}
							suffix={<IconArrowRight color="text" />}
							width="full"
							variant="transparent"
						></Button>
					</Stack>
				</Box>
			</Card>
		</Box>
	)
}
