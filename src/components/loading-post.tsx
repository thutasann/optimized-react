export const LoadingCard = () => {
	return (
		<div className="w-full rounded overflow-hidden shadow-lg m-2">
			<div className="w-full h-64 bg-gray-700 animate-pulse"></div>
		</div>
	);
};

export const LoadingPosts = () => {
	const loadPages = [1, 2, 3, 4, 5, 6];
	return (
		<div className="grid grid-cols-2 gap-4 content-start">
			{loadPages.map((num) => {
				return <LoadingCard key={num} />;
			})}
		</div>
	);
};
