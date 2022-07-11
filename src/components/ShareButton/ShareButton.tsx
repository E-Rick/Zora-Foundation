import React, { useState } from 'react'
import { Button, IconPlusSmall, Stat } from 'degen'
import { AnimatePresence, motion } from 'framer-motion'
import { Modal } from './Components/Modal'

export const ShareButton = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)
	return (
		<>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => (modalOpen ? close() : open())}
			>
				<Button prefix={<IconPlusSmall />} variant="secondary">
					<Stat size="small" meta={'Earn 1%'} value={'Share'} label={undefined} />
				</Button>
			</motion.button>
			<AnimatePresence
				// Disable any initial animations on children that
				// are present when the component is first rendered
				initial={false}
				// Only render one component at a time.
				// The exiting component will finish its exit
				// animation before entering component is rendered
				exitBeforeEnter={true}
				// Fires when all exiting nodes have completed animating out
				onExitComplete={() => null}
			>
				{modalOpen && <Modal handleClose={close} />}
			</AnimatePresence>
		</>
	)
}
