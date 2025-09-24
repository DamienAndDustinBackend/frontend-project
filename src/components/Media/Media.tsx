"use client";
import { FC } from "react";
import Image from "next/image";

interface MediaProps {
  path: string;
  width: number;
  height: number;
}

export const Media: FC<MediaProps> = ({ path, width, height }) => {
  return path.includes(".mp4") ? (
    <video
			width={width}
			height={height}
			controls
			preload="none"
      style={{
        border: "1px solid white",
        objectFit: "contain",
				width: "100%",
      }}
		>
			<source src={path} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
  ) : (
    <Image
      alt="Image isn't loading..."
      src={path}
      width={width}
      height={height}
      style={{
        border: "1px solid white",
        objectFit: "contain",
				width: "100%",
      }}
    />
  );
};
