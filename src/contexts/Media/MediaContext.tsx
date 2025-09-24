import { createContext, useContext } from "react";
import { type MediaContextType } from "./MediaContextType";

export const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const useMediaContext = () => {
	const context = useContext(MediaContext);
	if (!context) {
		throw new Error("useMediaContext must be used within a MediaProvider!");
	}

	return context;
}
