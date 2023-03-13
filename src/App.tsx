import SideBar from './components/sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import ReactMemo from './pages/react-memo';
import UseMemo from './pages/use-memo';
import { GitHubLink } from './mock/static-data';
import { BsGithub } from 'react-icons/bs';
import UseCallBack from './pages/use-callback';
import LazyImageLoad from './pages/lazy-image-load';
import InfinityScroll from './pages/infinity-scroll';
import MasteringArrays from './pages/mastering-arrays';

function App() {
	const route = useLocation().pathname;
	return (
		<div>
			<SideBar>
				<div className="mb-7 mr-5 fixed z-[999] right-0">
					{route !== '/' && (
						<a
							href={`${GitHubLink}${route}.tsx`}
							target="_blank"
							rel="noreferrer"
							className="bg-gray-700 rounded-md px-3 py-2 hover:bg-gray-600 transition-all duration-300 ease-in-out text-sm font-[600] flex items-center gap-1"
						>
							view code on <BsGithub />
						</a>
					)}
				</div>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/react-memo"
						element={<ReactMemo />}
					/>
					<Route
						path="/use-memo"
						element={<UseMemo />}
					/>
					<Route
						path="/use-callback"
						element={<UseCallBack />}
					/>
					<Route
						path="/lazy-image-load"
						element={<LazyImageLoad />}
					/>
					<Route
						path="/infinity-scroll"
						element={<InfinityScroll />}
					/>
					<Route
						path="/mastering-arrays"
						element={<MasteringArrays />}
					/>
				</Routes>
			</SideBar>
		</div>
	);
}

export default App;
