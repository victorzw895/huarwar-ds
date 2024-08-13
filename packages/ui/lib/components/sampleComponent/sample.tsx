import { sprinkles } from '#/styles/sprinkles.css';
import { vars } from '#/styles/theme.css';
import * as styles from './sample.css';
import { HTMLAttributes, ReactNode } from 'react';

export type SampleProps = Omit<HTMLAttributes<HTMLDivElement>, 'style'> & {
	children: ReactNode;
	backgroundColor: keyof typeof styles.backgroundColor;
	paddingX?: keyof typeof vars.space;
};

export const Sample = ({
	children,
	backgroundColor,
	paddingX,
}: SampleProps): JSX.Element => {
	return (
		<div
			className={`${styles.container} ${sprinkles({ paddingX })}`}
			data-testid='hwr.sample'
		>
			{children}
			<br />
			<div
				className={`${styles.box} ${styles.backgroundColor[backgroundColor]}`}
			>
				colors
			</div>
			<span className={styles.links}>link</span>
		</div>
	);
};
