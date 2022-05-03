import styled from 'styled-components'
import { mixFlexBox } from '../../mixinsCss/display'

const mixFlexBoxParams = {
	direction: 'column',
	align: 'center',
	justify: 'center',
	flow: 'wrap',
}

export const FormContact = styled.form`
	--font-size: 1rem;
	--textColor: #a6aebd;
	--bgColor: #424350;

	${mixFlexBox(mixFlexBoxParams)}
	box-shadow: 0.3rem 0.3rem 2rem rgb(0 0 0 / 30%);
	margin-bottom: 2rem;
	margin-top: 2rem;
	padding: 2.6rem 2rem 2.2rem;
	width: min(28rem, 100%);

	input[type='text'],
	input[type='email'] {
		background-color: var(--bgColor);
		border: none;
		border-radius: 0.35rem;
		color: var(--textColor);
		font-size: var(--font-size);
		min-height: 7vh;
		padding-left: 1.2rem;
		padding-right: 1.2rem;
		width: 100%;
	}

	input[type='text'] {
		margin-bottom: 1.4rem;
	}

	button {
		background-color: var(--bgColor);
		border: none;
		border-radius: 4rem;
		color: var(--textColor);
		cursor: pointer;
		font-size: calc(var(--font-size) - 0.1rem);
		margin-top: 2rem;
		padding: 0.6rem 2rem;
		text-transform: uppercase;

		@media (hover: hover) {
			&:hover {
				background-color: var(--textColor);
				color: var(--bgColor);
			}
		}
	}

	@media screen and (min-width: 768px) {
		--font-size: 1.2rem;

		input[type='text'] {
			margin-bottom: 1.9rem;
		}

		button {
			font-size: 1rem;
			padding: 0.8rem 2.8rem;
		}
	}
`
