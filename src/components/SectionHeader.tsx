import { Box, Heading } from 'degen'
import React from 'react'

type SectionHeaderProps = {
	title: string
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
	return (
		<Box id="details-section" marginBottom="5" borderBottomWidth="0.5" paddingBottom="5">
			<Heading level="2" color="textPrimary" responsive as="h4">
				{title}
			</Heading>
		</Box>
	)
}
