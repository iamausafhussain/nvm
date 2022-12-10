import Vimeo from "@u-wave/react-vimeo";

const VimeoPlayer = ({ videoLink, setIsVideoLoading, setPopUpIsActive }) => {
	return (
		<div className="w-full rounded-2xl relative overflow-hidden">
			<Vimeo
				video={videoLink}
				responsive={true}
				autoplay={true}
				muted={true}
				start={0}
				controls={true}
				width="100%"
				showTitle={false}
				showByline={false}
				onReady={() => {}}
				onLoaded={() => {}}
				onPlay={() => {
					setIsVideoLoading(false);
				}}
				onPlaying={() => {}}
				onEnd={() => {
					setPopUpIsActive(false);
				}}
			/>
		</div>
	);
};

export default VimeoPlayer;
