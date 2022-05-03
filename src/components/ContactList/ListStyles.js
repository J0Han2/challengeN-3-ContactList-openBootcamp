import styled from 'styled-components'
import { mixFlexBox } from '../../mixinsCss/display'

const mixFlexBoxParams = {
	direction: 'column',
	align: 'center',
}

export const ContainerList = styled.section`
	--font-size: 1rem;
	--dkGrayBlue: #a6aebd;
	--veryDkGrayBlue: #343a44;

	${mixFlexBox(mixFlexBoxParams)}
	width: 100%;

	ul {
		list-style: none;
		padding-left: 0;
	}

	li {
		border-top: 2px solid var(--veryDkGrayBlue);
		border-radius: 0.2rem;
		color: var(--dkGrayBlue);
		padding: 1.55rem 0.8rem;

		&:last-child {
			border-bottom: 2px solid var(--veryDkGrayBlue);
		}

		p:first-child {
			margin-bottom: 0;
			margin-top: 0;
		}

		p {
			font-size: var(--font-size);
			margin-bottom: 1.8rem;
			margin-top: 0.9rem;
		}
	}

	.message-default {
		margin-bottom: 0;
		margin-top: 0;
	}

	.btn {
		font-size: var(--font-size);
		padding-left: 0;
		padding-right: 0;
	}

	.btn-toggle {
		background: var(--veryDkGrayBlue);
		border-radius: 4rem;
		color: var(--dkGrayBlue);
		margin-right: 2rem;
		padding: 0.5rem 2rem;
	}

	@media (hover: hover) {
		.btn-toggle:hover {
			background-color: var(--dkGrayBlue);
			color: var(--veryDkGrayBlue);
			transition: color 0.3s ease-out, background-color 0.3s ease-in;
		}

		.btn-remove:hover {
			transform: scale(1.1);
			transition: transform 0.3s ease-in-out;
		}
	}

	@media screen and (min-width: 768px) {
		--font-size: 1.2rem;

		li {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
`
