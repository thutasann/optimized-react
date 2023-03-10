interface SideBarProps {
	link: string;
	name: string;
	isIndex?: boolean;
	isJs?: boolean;
}

export const SideBarData: SideBarProps[] = [
	{
		link: '/react-memo',
		name: 'React Memo',
	},
	{
		link: '/use-memo',
		name: 'Use Memo',
	},
	{
		link: '/use-callback',
		name: 'Use Callback',
	},
	{
		link: '/lazy-image-load',
		name: 'Lazy Image Load',
	},
	{
		link: '/infinity-scroll',
		name: 'Infinity Scroll',
	},
	{
		link: '/mastering-arrays',
		name: 'Mastering Arrays',
	},
];
