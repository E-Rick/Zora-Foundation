import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ModalProps = {
	children: ReactNode
	onClick: React.MouseEventHandler
}

export const Backdrop = ({ children, onClick }: ModalProps) => {
	return (
		<motion.div
			className="backdrop"
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	)
}
