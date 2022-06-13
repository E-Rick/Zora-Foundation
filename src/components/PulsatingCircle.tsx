import React from 'react'
import styles from '../styles/Home.module.css'
const pulseStyles = {
	item: {
		zIndex: 100,
		padding: '5px',
	},
	container: {},
}

export default function PulsatingCircle() {
	return <div className={styles['pulsating-circle']}></div>
}
