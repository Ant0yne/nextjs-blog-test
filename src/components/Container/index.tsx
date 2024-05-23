const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col md:border-l md:border-r">
			{children}
		</div>
	);
};

export default Container;
