type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

interface RevealOptions {
	threshold?: number;
	delay?: number;
	direction?: Direction;
	duration?: number;
}

const directionStyles: Record<Direction, { from: string; to: string }> = {
	up: {
		from: 'translateY(2rem)',
		to: 'translateY(0)'
	},
	down: {
		from: 'translateY(-2rem)',
		to: 'translateY(0)'
	},
	left: {
		from: 'translateX(-2rem)',
		to: 'translateX(0)'
	},
	right: {
		from: 'translateX(2rem)',
		to: 'translateX(0)'
	},
	scale: {
		from: 'scale(0.95)',
		to: 'scale(1)'
	}
};

export function scrollReveal(node: HTMLElement, options?: RevealOptions) {
	const threshold = options?.threshold ?? 0.15;
	const delay = options?.delay ?? 0;
	const direction = options?.direction ?? 'up';
	const duration = options?.duration ?? 600;
	const styles = directionStyles[direction];

	node.style.opacity = '0';
	node.style.transform = styles.from;
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = styles.to;
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

export function staggerChildren(node: HTMLElement, options?: { delay?: number; stagger?: number; direction?: Direction }) {
	const baseDelay = options?.delay ?? 0;
	const stagger = options?.stagger ?? 100;
	const direction = options?.direction ?? 'up';
	const styles = directionStyles[direction];

	const children = Array.from(node.children) as HTMLElement[];
	children.forEach((child, i) => {
		child.style.opacity = '0';
		child.style.transform = styles.from;
		child.style.transition = `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) ${baseDelay + i * stagger}ms, transform 600ms cubic-bezier(0.4, 0, 0.2, 1) ${baseDelay + i * stagger}ms`;
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					children.forEach((child) => {
						child.style.opacity = '1';
						child.style.transform = styles.to;
					});
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

export function parallax(node: HTMLElement, options?: { speed?: number }) {
	const speed = options?.speed ?? 0.3;
	let ticking = false;

	function onScroll() {
		if (!ticking) {
			requestAnimationFrame(() => {
				const rect = node.getBoundingClientRect();
				const center = rect.top + rect.height / 2;
				const windowCenter = window.innerHeight / 2;
				const offset = (center - windowCenter) * speed;
				node.style.transform = `translateY(${offset}px)`;
				ticking = false;
			});
			ticking = true;
		}
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
		}
	};
}
