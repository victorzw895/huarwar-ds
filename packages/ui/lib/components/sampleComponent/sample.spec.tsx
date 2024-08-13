import { describe, it } from 'vitest';
import { Sample } from './sample';
import { screen, render } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { axe } from 'vitest-axe';

describe('Sample Component', () => {
	it('renders component with correct test', async () => {
		render(
			<Sample backgroundColor='bg-brand-primary' children='sample text' />
		);
		const { getByText } = within(screen.getByTestId('hwr.sample'));

		expect(getByText('sample text')).toBeInTheDocument();
	});

	it('passes a11y', async () => {
		const { container } = render(
			<Sample backgroundColor='bg-brand-primary' children='sample text' />
		);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
