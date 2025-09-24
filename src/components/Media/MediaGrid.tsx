import { FC } from "react";

import { Box, Grid } from "@mui/material";

import { useMediaContext } from "@/contexts/Media/MediaContext";
import { Media } from "./Media";

export const MediaGrid: FC = ({}) => {
  const mediaData = useMediaContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={ 2 }
				columns={{
					xs: 2,
					sm: 4,
					md: 8,
					lg: 12,
				}}
        sx={{
          border: "1px solid white",
          padding: 2,
        }}
      >
        {mediaData.paths.map((path, index) => (
          <Grid
					container
					key={index}
					size={{
						xs: 1,
						sm: 2,
						md: 1,
					}}
					sx={{
						justifyContent: "center"
					}}
					>
            <Media path={path} width={1920 / 8} height={1080 / 8} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
