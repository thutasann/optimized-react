import { Link } from 'react-router-dom';
import { SideBarData } from '../mock/sidebar';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Home = () => {
	return (
		<div className="h-full overflow-y-hidden w-full flex items-center justify-center flex-col gap-[20px]">
			<h1 className="text-4xl font-bold">OPTIMIZED REACT</h1>
			<p className="text-xl text-center">
				This site contains Optimization Techniques for React, React Hook and
				React Redux and TypeScript.
			</p>
			<Link
				to={SideBarData[0].link}
				className="bg-gray-700 px-3 py-2 mt-5 rounded-md font-[600] text-sm hover:bg-gray-600 transition-all duration-700 ease-in-out flex items-center gap-2 group"
			>
				Let Get Started{' '}
				<BsArrowRightCircleFill
					size={19}
					className="group-hover:ml-2 transition-all duration-300 ease-in-out"
				/>
			</Link>
		</div>
	);
};

export default Home;
