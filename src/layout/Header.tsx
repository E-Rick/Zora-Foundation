import React, { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import { Logo } from '@/components/Logo'
import { Box, Stack, Button, IconSearch } from 'degen'
import { UserMenuButton } from '@/components/UserMenuButton'
import { Menu } from '@/components/Menu'
import { useAccount } from 'wagmi'
import { Search } from '@/components/Search'

export const Header: FC = () => {
	const { data, isError, isLoading } = useAccount()
	return (
		<>
			<Box paddingX="6" paddingTop="8" marginX="auto" backgroundColor="transparent" zIndex="50">
				<Box id="nav" marginBottom="6">
					<Stack direction="horizontal" justify="space-between" align="center">
						<a href="#">
							<Logo />
						</a>
						<Stack direction="horizontal" align="center">
							<Box display={{ xs: 'none', lg: 'block' }}>
								<Search />
							</Box>
							{data && <UserMenuButton />}
							<Button shape="circle" variant="tertiary">
								<IconSearch />
							</Button>
							<Box display={{ xs: 'block', lg: 'none' }}>
								<Menu />
							</Box>
							{!data && (
								<Box display={{ xs: 'none', lg: 'block' }}>
									<ConnectWallet />
								</Box>
							)}
						</Stack>
					</Stack>
				</Box>
			</Box>
		</>
	)
}
