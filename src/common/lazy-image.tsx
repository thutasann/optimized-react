import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
	placeholderSrc: string;
	src: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ placeholderSrc, src }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isPlaceholder, setIsPlaceholder] = useState<boolean>(false);
	const [view, setView] = useState<string>('');
	const placeholderRef = useRef<HTMLImageElement | any>(null);
	const imageRef = useRef<HTMLImageElement | any>(null);

	useEffect(() => {
		if (document.readyState === 'complete') {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setView(src);
					observer.unobserve(placeholderRef.current);
				}
			});
			if (placeholderRef && placeholderRef.current && isPlaceholder) {
				observer.observe(placeholderRef.current);
			}
		}
	}, [src, isPlaceholder]);

	return (
		<>
			{isLoading && (
				<img
					src={placeholderSrc}
					alt="Placeholder"
					className="rounded-md shadow-md w-full h-full"
					ref={placeholderRef}
					onLoad={() => setIsPlaceholder(true)}
				/>
			)}
			<img
				src={view}
				className={isLoading ? 'hidden' : 'rounded-md shadow-md'}
				onLoad={() => setIsLoading(false)}
				alt="Lazy"
				ref={imageRef}
			/>
		</>
	);
};

export default LazyImage;
