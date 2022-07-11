import { Avatar, Box, Text, Card, IconArrowRight, Stack } from 'degen'
import React from 'react'
import { TransactionItem } from './TransactionItem'

export const Transactions = () => {
	return (
		<Box id="transaction list">
			<Stack space="2">
				<TransactionItem />
				<TransactionItem />
				<TransactionItem />
			</Stack>
		</Box>
	)
}
