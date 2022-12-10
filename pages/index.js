import { useEffect, useState } from "react";
import FragmanPopUp from "../components/FragmanPopUp";
import VimeoPlayer from "../components/VimeoPlayer";

export default function Home() {
	const [selectedFragman, setSelectedFragman] = useState(null);
	const [popUpIsActive, setPopUpIsActive] = useState(false);

	return (
		<div className="flex flex-col justify-center items-center p-10">
			<div className="mb-7">Nextstacks vimeo sample🚀</div>

			<div className="m-7">This vimeo player is without popup view mode🔥</div>
			<div className="flex flex-col lg:w-1/2 md:w-2/3 w-full px-3">
				<VimeoPlayer videoLink="https://vimeo.com/779904406" />
			</div>

			<div className="m-7">
				<div className="">This vimeo player is with popup view mode🔥</div>

				<div className="flex flex-row">
					<div className="p-2">
						<button
							className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
							onClick={() => {
								//we can use id of vimeo uploaded file also
								setSelectedFragman(779904406);
								setPopUpIsActive(true);
							}}>
							Play Video 1
						</button>
					</div>

					<div className="p-2">
						<button
							className="block rounded-md cursor-pointer py-3 px-5 text-white bg-red-600"
							onClick={() => {
								setSelectedFragman("https://vimeo.com/779904406");
								setPopUpIsActive(true);
							}}>
							Play Video 2
						</button>
					</div>
				</div>
			</div>

			{selectedFragman !== null && popUpIsActive && (
				<FragmanPopUp
					videoLink={selectedFragman}
					setPopUpIsActive={setPopUpIsActive}
				/>
			)}
		</div>
	);
}
