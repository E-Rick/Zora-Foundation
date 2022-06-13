import { useEffect, useState } from 'react'
import { getEllipsisTxt } from '@/lib'
import { Button, Text } from 'degen'
import { useAccount } from 'wagmi'

type AddressProps = {
	copyable?: boolean
	size?: number
}

function Address({ copyable, size }: AddressProps) {
	const ADDRESS = `https://zora.app/@wrecs/bot/5?ref=`
	const { data } = useAccount()
	const [address, setAddress] = useState('0xf153...3F9e')
	const [isClicked, setIsClicked] = useState(false)

	useEffect(() => {
		setAddress(`${ADDRESS}${data?.address}`)
	}, [ADDRESS, address, data?.address])

	// if (!address) return <Skeleton paragraph={{ rows: 1, width: '100%' }} title={false} active />

	const Copy = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="26"
			height="26"
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="#666666"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{ cursor: 'pointer' }}
			onClick={() => {
				navigator.clipboard.writeText(address)
				setIsClicked(true)
			}}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M15 3v4a1 1 0 0 0 1 1h4" />
			<path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
			<path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
			<title id="copy-address">Copy Address</title>
		</svg>
	)

	return (
		<>
			<Button
				variant="tertiary"
				center
				prefix={
					<Text ellipsis color="textSecondary" size="small">
						{size ? `${ADDRESS}${getEllipsisTxt(address, size)}` : address}
					</Text>
				}
				suffix={copyable && (isClicked ? <Check /> : <Copy />)}
				width="auto"
				onClick={() => {
					navigator.clipboard.writeText(address)
					setIsClicked(true)
				}}
			></Button>
		</>
	)
}

export default Address

const Check = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="3"
		stroke="#21BF96"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M5 12l5 5l10 -10" />
		<title id="copied-address">Copied!</title>
	</svg>
)
