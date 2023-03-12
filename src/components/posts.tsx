import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import useLazyLoad from '../hook/useLazyload';
import { LoadingPosts } from './loading-post';
import posts from '../mock/post.json';
import LazyImage from '../common/lazy-image';

const NUM_PER_PAGES: number = 6;
const TOTAL_PAGES = 3;

interface CardProps {
	owner: string;
	imageUrl: string;
}

const Posts = () => {
	// const images = posts['data'];
	const triggerRef = useRef(null);

	const [images, setImages] = useState<any[]>([]);

	useEffect(() => {
		fetch('https://picsum.photos/v2/list')
			.then((res) => res.json())
			.then((data) => setImages(data));
	}, []);

	const onGrabData = (currentPage: number) => {
		return new Promise((resolve: Function) => {
			const data2 = images.slice(
				((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGES,
				NUM_PER_PAGES * (currentPage % TOTAL_PAGES),
			);
			resolve(data2);
		});
	};

	const { data, loading } = useLazyLoad({
		triggerRef,
		onGrabData,
	});
	console.log('loading', loading);

	return (
		<>
			<div className="grid grid-cols-2 gap-4 content-start">
				{data?.map((data: any) => {
					return (
						<Card
							key={data.owner}
							owner={data.owner}
							imageUrl={data.download_url}
						/>
					);
				})}
			</div>
			<div
				ref={triggerRef}
				className={clsx('trigger', {
					visible: loading,
				})}
			>
				<LoadingPosts />
			</div>
		</>
	);
};

export default Posts;

export const Card: React.FC<CardProps> = ({ owner, imageUrl }) => {
	return (
		<div className="w-full rounded overflow-hidden shadow-lg m-2">
			<LazyImage
				// className="w-full shadow-md h-full object-center opacity-100 hover:opacity-80 duration-300 transition-all ease-in-out"
				src={imageUrl}
				placeholderSrc="./placeholder.png"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-center text-sm md:file:text-md mb-2">
					{owner}
				</div>
			</div>
		</div>
	);
};
