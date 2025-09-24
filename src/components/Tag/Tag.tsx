"use client";
import { Chip } from "@mui/material";
import { FC } from "react";

interface TagProps {
	name: string;
	bgcolor: string;
	fgcolor: string;
}

export const Tag: FC<TagProps> = ({ name, bgcolor, fgcolor }) => {
	return (
		<Chip label={name} sx={{ backgroundColor: bgcolor, color: fgcolor }} />
	)
}
