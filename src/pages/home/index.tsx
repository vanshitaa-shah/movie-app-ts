import React, { ChangeEvent, useContext, useState } from "react";
import Layout from "../../layout";
import MovieList from "../../components/movie-list";
import MovieTrendList from "../../components/movie-list/MovieTrendList";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/MovieContext";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setSearchList(
      movies.filter((movie) => {
        const title = movie.title.toLowerCase();
        if (title.includes(searchValue)) return movie.title;
      })
    );
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            p: 1,
            backgroundColor: "#10141f",
          }}
        >
          <InputBase
            placeholder="Search for movies or TV series"
            sx={{ ml: 1, flex: 1, color: "white" }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>

      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
