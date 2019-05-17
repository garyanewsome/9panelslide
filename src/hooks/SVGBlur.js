// SVGBlur creates an svg image and applies the `feGaussianBlur` to the image.
// Props = { width, height, blur=5 (the stdDeviation amount), image }

import React from "react"

const SVGBlur = ({ width, height, blur = 5, image }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			style={{ position: "absolute", top: "0", left: "0" }}
		>
			<defs>
				<filter id="blur">
					<feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
				</filter>
			</defs>
			<image filter="url(#blur)" xlinkHref={image} x="0" y="0" height="1080" width="1920" />
		</svg>
	)
}

export default SVGBlur
