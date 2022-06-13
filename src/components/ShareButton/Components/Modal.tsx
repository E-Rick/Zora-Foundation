import React, { MouseEventHandler, useState } from 'react'
import { motion } from 'framer-motion'
import { Backdrop } from '@/components/ShareButton/Components/Backdrop'
import { Box, Button, Card, Heading, IconBellSolid, IconCheck, IconPlusSmall, Stack, Tag, Text } from 'degen'
import Address from './Address'

// custom animation states ahe different stages
const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.5,
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
}

type ModalProps = {
	handleClose: MouseEventHandler
}

export const Modal = ({ handleClose }: ModalProps): JSX.Element => {
	const finderFeeSection = (
		<Box borderWidth="0.375" padding="4" borderRadius="extraLarge">
			<Stack>
				<Stack direction="horizontal" align="center" space="4">
					<Text size="large" weight="semiBold">
						Finders Fee
					</Text>
					<Tag hover tone="green">
						Earn 1%
					</Tag>
				</Stack>
				<Stack direction="horizontal" align="center">
					<Text>If the NFT is sold via your Finder&apos;s Fee link, you will earn 1% of the sale.</Text>
					<Button as="a" variant="transparent" size="small">
						Learn more
					</Button>
				</Stack>
			</Stack>
		</Box>
	)

	return (
		<Backdrop onClick={handleClose}>
			<motion.div onClick={e => e.stopPropagation()} variants={dropIn} initial="hidden" animate="visible" exit="exit">
				<Card padding="8" shadow level="2">
					<Stack space="8">
						<Stack direction="horizontal" align="center" space="4">
							{/* Top section */}
							<Button shape="circle" variant="secondary" size="small" onClick={handleClose}>
								<IconPlusSmall />
							</Button>
							<Heading as="h2" responsive>
								Share
							</Heading>
						</Stack>
						<Stack space="5">
							<Address copyable size={6} />
							{finderFeeSection}
							<Button width="full" variant="primary" prefix={<IconBellSolid size="8" />} tone="accent">
								<Text size="large" color="white">
									Share
								</Text>
							</Button>
						</Stack>
					</Stack>
				</Card>
			</motion.div>
		</Backdrop>
	)
}
