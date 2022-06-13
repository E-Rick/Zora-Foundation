import { IconSearch, Input } from 'degen'
import React from 'react'

export const Search = () => {
	return <Input label="Search" hideLabel placeholder="Search the metaverse" prefix={<IconSearch />} autoFocus={true} />
}
