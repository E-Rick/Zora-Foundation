import { Avatar, Button } from 'degen'
import React from 'react'
import { Tooltip } from './Components/Tooltip'
import Image from 'next/image'
export const UserMenuButton = () => {
	const NextImage = () => (
		<Image
			src="https://gateway.pinata.cloud/ipfs/QmQxFznXuWMfEesBoK1j1Vm7rgesWvoKvGcX4Y3dDvVG4C"
			alt="scholars"
			layout="fill"
			priority
		/>
	)
	return (
		<Tooltip label="user-menu">
			<Button shape="circle" variant="secondary">
				<Avatar as={NextImage} label="Avatar" />
			</Button>
		</Tooltip>
	)
}
