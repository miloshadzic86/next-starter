import type { NextPage } from 'next';

const values = ['One Longerone...', 'two', 'three', 'four'];

const Home: NextPage = () => {
	return (
		<div className="min-h-screen flex bg-backgroundDark text-gray-400 font-poppins">
			<SideBar />
			<ContentContainer />
		</div>
	);
};

function SideBar() {
	return (
		<div className="m-5 flex flex-col w-1/5">
			<div className="inline-block text-xl text-accent font-bold underline">
				Public Playlist's
			</div>
			<ul className="mt-5 ">
				{values.map((val, index) => (
					<li className="hover:text-accent cursor-pointer" key={index}>
						{val}
					</li>
				))}
			</ul>
		</div>
	);
}

function ContentContainer() {
	return (
		<div className="flex flex-col bg-backgroundLighter w-full text-gray-300 ">
			<div className="m-5">
				<ul className="mt-10">
					{values.map((val, index) => (
						<li className="hover:text-accent cursor-pointer" key={index}>
							{val}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Home;
