import React, { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'

export const Header: FC = () => {
	const Logo = () => (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110">
				<defs>
					<radialGradient
						id="gzr"
						gradientTransform="translate(66.4578 24.3575) scale(75.2908)"
						gradientUnits="userSpaceOnUse"
						r="1"
						cx="0"
						cy="0%"
					>
						<stop offset="15.62%" stopColor="hsl(2, 72%, 94%)" />
						<stop offset="39.58%" stopColor="hsl(3, 76%, 80%)" />
						<stop offset="72.92%" stopColor="hsl(9, 82%, 63%)" />
						<stop offset="90.63%" stopColor="hsl(11, 85%, 56%)" />
						<stop offset="100%" stopColor="hsl(12, 85%, 55%)" />
					</radialGradient>
				</defs>
				<g transform="translate(5,5)">
					<path
						d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
						fill="url(#gzr)"
					/>
					<path
						stroke="rgba(0,0,0,0.075)"
						fill="transparent"
						strokeWidth="1"
						d="M50,0.5c27.3,0,49.5,22.2,49.5,49.5S77.3,99.5,50,99.5S0.5,77.3,0.5,50S22.7,0.5,50,0.5z"
					/>
				</g>
			</svg>
		</div>
	)

	return (
		<div className="mx-auto max-w-7xl">
			<div className="relative mb-10 px-4 pt-6 sm:px-6 lg:px-8">
				<nav className="relative flex items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
					<div className="flex  w-full flex-shrink-0 flex-grow items-center justify-between lg:flex-grow-0">
						<a href="#">
							<span className="sr-only">Zorbs</span>
							<Logo />
						</a>
						<ConnectWallet />
					</div>
				</nav>
			</div>
		</div>
	)
}
