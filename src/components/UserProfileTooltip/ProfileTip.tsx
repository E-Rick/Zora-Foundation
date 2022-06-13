import { Box, Card, Stack, Avatar, Button, Heading, AvatarGroup, Stat, Text } from 'degen'
import React from 'react'
import Image from 'next/image'
const avatars = {
	noun97: 'https://gateway.pinata.cloud/ipfs/QmeBvrxKe64A6VRrTnJFaQu3g2ztCjeNZEM6e7nPF7yRMp',
	noun11: 'https://gateway.pinata.cloud/ipfs/QmQxFznXuWMfEesBoK1j1Vm7rgesWvoKvGcX4Y3dDvVG4C',
	noun3: 'https://gateway.pinata.cloud/ipfs/bafkreigz5pvzdtmaz24rdu4x3aoybhndmrei76jdrimxpdymjcexniatt4',
}
const ProfileTip = () => {
	const NextImage = () => (
		<Image
			src="https://gateway.pinata.cloud/ipfs/bafkreigz5pvzdtmaz24rdu4x3aoybhndmrei76jdrimxpdymjcexniatt4"
			alt="scholars"
			layout="fill"
			priority
		/>
	)
	return (
		<>
			<Box id="Profile hover transclusion" padding="6">
				<Card padding="8" shadow width="64">
					<Box id="Top Card" paddingBottom="7">
						<Box paddingBottom="5">
							<Stack direction="horizontal" justify="space-between" align="center">
								<Avatar
									as={NextImage}
									label="Avatar"
									src="https://gateway.pinata.cloud/ipfs/QmQxFznXuWMfEesBoK1j1Vm7rgesWvoKvGcX4Y3dDvVG4C"
									size="16"
								/>
								<Button center size="medium" width="28" shape="circle" tone="green">
									Follow
								</Button>
							</Stack>
						</Box>
						<Box paddingBottom="3">
							<Box paddingBottom="1">
								<Heading level="2">WreCs</Heading>
							</Box>
							<Text size="large" color="orange">
								@WreCs
							</Text>
						</Box>
						<Box paddingBottom="4">
							<Text as="p">Playful polymath. Rennisannce Designer. Optimal Living.</Text>
						</Box>

						<Stack direction="horizontal">
							<Text weight="bold">Followed by</Text>
							<AvatarGroup
								limit={6}
								members={[
									{ label: 'Noun 97', src: avatars.noun97 },
									{ label: 'Noun 11', src: avatars.noun11 },
									{ label: 'Noun 3', src: avatars.noun3 },
								]}
							/>
						</Stack>
					</Box>

					<Box borderTopWidth="0.5">
						<Box paddingTop="5">
							<Stack flex={1} direction="horizontal" space="5">
								<Stat meta={'Following'} size="medium" value={999} label={undefined} />
								<Stat meta={'Followers'} size="medium" value={777} label={undefined} />
							</Stack>
						</Box>
					</Box>
				</Card>
			</Box>
		</>
	)
}

export default ProfileTip
