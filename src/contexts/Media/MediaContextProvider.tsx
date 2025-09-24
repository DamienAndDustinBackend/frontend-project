import { useState, type ReactNode } from "react";
import { MediaContext } from "./MediaContext";
import { MediaContextType } from "./MediaContextType";

export const MediaContextProvider = ( { children }: { children: ReactNode } ) => {
	const [paths, setPaths] = useState<string[]>([
		"/Beetle.png",
		"/vertical.png",
		"/testvideo.mp4",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
		"/Beetle.png",
	]);

	const addPath = (path: string) => {
		setPaths( [...paths, path] );
	}

	const data: MediaContextType = {
		paths,
		addPath,
	}

	return <MediaContext.Provider value={ data }>{ children }</MediaContext.Provider>;
}
