import { Card, CardContent, Stack, Typography, Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/MovieContext";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";

interface MovieCardProps {
  movie: MovieDataType;
}
const MovieTrendCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };
  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0, 0, 0, 0.6)"
          borderRadius="8px"
        />
        <Stack
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item mr={1}>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="year of movie"
              >
                {movie.year}
              </Typography>
            </Grid>

            <Grid item>
              <img
                src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                alt=""
                width={16}
                height={16}
              />
            </Grid>

            <Grid item mr={1}>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="movie category"
              >
                {movie.category}
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                fontSize={10}
                color="#E0E0E0"
                aria-label="movie rating"
              >
                {movie.rating}
              </Typography>
            </Grid>
          </Grid>

          <Typography aria-label="movie rating" color="#E0E0E0" padding={0}>
            {movie.title}
          </Typography>
        </Stack>

        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "10px",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "50%",
              cursor: "pointer",
              "&:hover": { opacity: 0.5 },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? (
              <BookmarkIcon fill={"#E0E0E0"} />
            ) : (
              <BookmarkEmptyIcon />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrendCard;
