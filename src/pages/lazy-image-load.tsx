import React, { useEffect, useState } from 'react';
import { Heading } from '../common/heading';
import LazyImage from '../common/lazy-image';

interface ImageProps {
	download_url: string;
}

const LazyImageLoad: React.FC = () => {
	const [photos, setPhotos] = useState<ImageProps[]>([]);

	useEffect(() => {
		fetch('https://picsum.photos/v2/list')
			.then((res) => res.json())
			.then((data) => setPhotos(data));
	}, []);

	return (
		<div>
			<Heading text="Custom Image Lazy Load" />
			<div className="grid grid-cols-2 w-full gap-3">
				{photos?.map((photo, index) => (
					<LazyImage
						key={index}
						placeholderSrc="./placeholder.png"
						src={photo.download_url}
					/>
				))}
			</div>
		</div>
	);
};
export default LazyImageLoad;
