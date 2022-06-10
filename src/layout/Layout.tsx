import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Header } from './Header'

type Props = {
	children?: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Zorbs</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className="relative overflow-hidden ">
				<div className="mx-auto max-w-7xl">
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}
