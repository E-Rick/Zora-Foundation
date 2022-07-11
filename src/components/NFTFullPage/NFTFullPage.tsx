import {
	Box,
	Stack,
	Heading,
	IconUpload,
	Card,
	Avatar,
	Stat,
	Button,
	Text,
	Tag,
	IconChevronUp,
	IconDotsHorizontal,
} from 'degen'
import React from 'react'
import { SectionHeader } from './SectionHeader'
import { ShareButton } from '../ShareButton/Components'
import { Transactions } from '../Transactions'
import { Tooltip } from './ProfileTooltip/Tooltip'
import { UserProfileTooltip } from '../UserProfileTooltip'
import { DetailLink } from './DetailLink'
import { AuctionWon } from './AuctionWon'
import { TransactionItem } from '../Transactions/TransactionItem'

export const NFTFullPage = () => {
	const renderProps = () => {
		{
			/* Properties and tags section */
		}
		{
			/* <Box id="Tags section" display="grid" gap="5" paddingBottom="6">
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
				</Box> */
		}
	}
	return (
		<>
			<Box>
				{/* Image section */}
				<Box
					id="nft image"
					marginBottom="8"
					backgroundColor="foregroundSecondary"
					height="96"
					paddingTop={{ xs: '96' }}
				/>
			</Box>
			<Box marginX="auto" maxWidth="screenMd" paddingTop="8" marginX="4">
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
								<Stack space="4" justify="space-between">
									<Text color="textSecondary" weight="medium">
										Created by
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
				{/* Purchase card */}
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
				{/* Under the Offer card */}
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
			</Box>

			{/* TODO: ON WIDER LAYOUTS GRID */}
			{/* Bottom section */}
			<Box marginX="auto" maxWidth="screenMd" paddingTop="8">
				<Box padding="6">
					<SectionHeader title="Description" />
					<SectionHeader title="Details" />
					{/* id="detail-links" */}
					<Box marginY="8">
						<Stack space="4">
							<DetailLink />
							<DetailLink />
						</Stack>
					</Box>

					{/* Report button icon */}
					<Box id="report and share buttons" paddingY="5">
						<Stack direction="horizontal">
							{/* TODO: Report NFT ButtonIcon */}
							<Button shape="circle" variant="secondary">
								<IconDotsHorizontal />
							</Button>
							<ShareButton />
						</Stack>
					</Box>

					<SectionHeader title="Provenance" />
					<TransactionItem />
					<AuctionWon />
					<Transactions />
				</Box>
			</Box>
		</>
	)
}
