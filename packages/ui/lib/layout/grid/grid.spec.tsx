import { describe, it } from 'vitest';
import { Grid } from './grid';
import { screen, render } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { axe } from 'vitest-axe';

describe('Grid Component', () => {
	it('renders component with correct children text', async () => {
		render(<Grid children='sample text' data-testid='hwr.grid.container' />);

		const { getByText } = within(screen.getByTestId('hwr.grid.container'));

		expect(getByText('sample text')).toBeInTheDocument();
	});

	it('renders component with correct children', async () => {
		render(
			<Grid container data-testid='hwr.grid.container'>
				<Grid large={6}>
					<div>6</div>
				</Grid>
				<Grid large={5}>
					<div>5</div>
				</Grid>
			</Grid>
		);
		const { children } = screen.getByTestId('hwr.grid.container');

		expect(children).toHaveLength(2);
	});

	it('renders children with correct prop', () => {
		render(
			<Grid container data-testid='hwr.grid.container'>
				<Grid large={6}>
					<div>6</div>
				</Grid>
				<Grid large={5}>
					<div>5</div>
				</Grid>
			</Grid>
		);

		const { children } = screen.getByTestId('hwr.grid.container');

		expect(children[0]).toHaveAttribute('large', '6');

		expect(children[1]).toHaveAttribute('large', '5');
	});

	it('passes a11y', async () => {
		const { container } = render(<Grid children='sample text' />);
		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
