import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

type ArrowButtonProps = {
	isOpen: boolean;
	setIsOpen: () => void;
};

export const ArrowButton = ({ isOpen, setIsOpen }: ArrowButtonProps) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={setIsOpen}
			onMouseDown={() => setIsPressed(true)}
			onMouseUp={() => setIsPressed(false)}
			onMouseLeave={() => setIsPressed(false)} // Сброс при выходе курсора
			className={clsx(
				styles.container,
				isOpen && styles.container_open,
				isPressed && styles.pressed
			)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen && styles.arrow_open)}
			/>
		</div>
	);
};
