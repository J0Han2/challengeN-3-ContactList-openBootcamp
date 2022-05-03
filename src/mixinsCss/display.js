import { css } from 'styled-components'

export const mixFlexBox = ({
	display = 'flex',
	direction = 'row',
	align = 'flex-start',
	justify = 'start',
	flow = 'nowrap',
}) => {
	return css`
		align-items: ${align};
		display: ${display};
		flex-flow: ${direction} ${flow};
		justify-content: ${justify};
	`
}
