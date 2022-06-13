import { Box, Text } from 'degen'
import React from 'react'

type DescriptionProps = {
	description: string
}
/**
 * The original image that started it all. This photo of the Shiba Inu “Kabosu” was taken by her owner Atsuko Sato
				on February 13th, 2010. After sharing it to her personal blog alongside the series of other famous images under
				the title “Taking a walk with Kabosu-chan,” these photos went on to kickstart the Doge meme and have circulated
				the web ever since — none more iconic than this picture.
 * @param param0 
 * @returns 
 */
export const Description = ({ description }: DescriptionProps) => {
	return (
		<Box id="description" paddingBottom="12">
			<Text size="base" font="sans" lineHeight="1.5" whiteSpace="initial">
				{description}
			</Text>
		</Box>
	)
}
