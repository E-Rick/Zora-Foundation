import {
	Box,
	Stack,
	Heading,
	IconUpload,
	Card,
	Avatar,
	Stat,
	Button,
	IconBookOpen,
	Text,
	Tag,
	IconChevronUp,
} from 'degen'
import React from 'react'
import { SectionHeader } from './SectionHeader'
import { ShareButton } from '../ShareButton'
import { Transactions } from '../Transactions'
import { Tooltip } from './ProfileTooltip/Tooltip'
import { UserProfileTooltip } from '../UserProfileTooltip'

export const NFTFullPage = () => {
	return (
		<>
			<Box padding="6">
				<Box
					id="nft image"
					marginBottom="8"
					backgroundColor="foregroundSecondary"
					height="96"
					paddingTop={{ xs: '96' }}
				/>

				<Stack align="flex-start" space="6">
					<Heading level="1" responsive>
						#13 | Monkey riding an elephant scene with background seed 991 and a Black Spade card suit
					</Heading>

					<Stack direction="horizontal" align="center" space="2">
						<Text>Minted on Mar 27, 2022</Text> <IconUpload color="inherit" />
					</Stack>

					<Box flex="auto" flexDirection="column">
						<Stack justify="space-between" direction={{ xs: 'vertical', sm: 'horizontal' }} space={{ xs: '8' }}>
							<Box paddingRight="6" marginRight="6" borderRightWidth={{ xs: '0', sm: '0.375' }}>
								<Stack space="4" direction="vertical" justify="space-between">
									<Text color="textSecondary" weight="medium">
										Created by
									</Text>
									<Card shadow padding="2">
										<Stack direction={{ md: 'vertical' }} justify="flex-start" align="center" space="0">
											<Avatar
												label="Avatar"
												src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png"
												size="8"
											/>
											<Box padding="2">
												<Text color="text">@WreCs</Text>
											</Box>
										</Stack>
									</Card>
								</Stack>
							</Box>

							<Box paddingRight="6" marginRight="6">
								<Stack space="3">
									<Text color="textSecondary" weight="medium">
										Collection
									</Text>
									<Card shadow padding="2">
										<Stack direction="horizontal" align="center">
											<Avatar
												label="Avatar"
												src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png"
												size="8"
											/>
											<Text>@WreCs</Text>
										</Stack>
									</Card>
								</Stack>
							</Box>
						</Stack>
					</Box>
				</Stack>
			</Box>
			<Box id="purchase card" padding="6">
				<Card padding="6" shadow>
					<Box paddingBottom="2">
						<Stat label="Last SOLD" size="medium" value={'2.65 ETH'} />
					</Box>
					<UserProfileTooltip label="wrecs">
						<Button center variant="primary" width="full">
							Make offer
						</Button>
					</UserProfileTooltip>
				</Card>
			</Box>
			<Box paddingBottom="8">
				<Stack direction="horizontal" align="center" justify="center" space="2">
					<Text weight="medium">Owned by</Text>
					<UserProfileTooltip label="wrecs">
						<Button variant="secondary">
							<Stack direction="horizontal" justify="flex-start" align="center">
								<Avatar
									label="Avatar"
									src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png"
									size="8"
								/>
								<Text>@WreCs</Text>
							</Stack>
						</Button>
					</UserProfileTooltip>
				</Stack>
			</Box>
			<Card shadow hover padding="3" borderRadius="full"></Card>
			<Box padding="6">
				<SectionHeader title="Description" />
				<SectionHeader title="Details" />
				<SectionHeader title="Provenance" />
				{/* id="detail-links" */}
				<Box marginY="8">
					<Stack space="4">
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
									View metadata
								</Text>
							</Button>
						</Stack>
					</Stack>
				</Box>
				<Box id="Tags section" display="grid" gap="5" paddingBottom="6">
					<Box paddingBottom="4">
						<Text weight="medium">Tags</Text>
					</Box>

					<Stack wrap direction="horizontal" align="center" space="4">
						<Tag>voxel</Tag>
						<Tag>persian</Tag>
						<Tag>madmaraca</Tag>
						<Tag>diorama</Tag>
						<Tag>architecture</Tag>
					</Stack>
				</Box>
				<Box id="report and share buttons" paddingY="5">
					<Stack direction="horizontal">
						{/* TODO: Report NFT ButtonIcon */}
						<Button shape="circle" variant="secondary">
							. . .
						</Button>
						<ShareButton />
					</Stack>
				</Box>
				<Box id="provenance-section" marginBottom="5" borderBottomWidth="0.5" paddingY="5">
					<Heading level="2" color="textPrimary" responsive as="h3">
						Provenance
					</Heading>
				</Box>
				<Box id="auction won section" paddingY="5" paddingBottom="8">
					<Stack justify="center" align="center" space="4">
						<Avatar
							label="Avatar"
							src="https://images.mirror-media.xyz/publication-images/H-zIoEYWk4SpFkljJiwB9.png"
							size="8"
						/>
						<Stack direction="horizontal" space="2">
							<Text size="base" weight="medium">
								Auction won by
							</Text>
							<Text>@WreCs</Text>
						</Stack>
						<Text weight="bold" size="headingTwo">
							Sold for 2.65 ETH
						</Text>
						<Text>Jun 11, 2022 at 2:32pm</Text>
					</Stack>
				</Box>
				{/* TODO: Auction winner section */}
				<Box id="auction results pill" paddingBottom="8">
					<Stack direction="horizontal" justify="center">
						<Card shadow hover padding="4" borderRadius="full">
							<Stack direction="horizontal" justify="flex-start" align="center" space="2">
								<Text weight="medium">Auction settled by</Text>
								<Text color="textSecondary">@WreCs</Text>
								<IconChevronUp color="text" />
							</Stack>
						</Card>
					</Stack>
				</Box>
				{/* TODO: Transactions list */}
				<Transactions />
			</Box>
		</>
	)
}
