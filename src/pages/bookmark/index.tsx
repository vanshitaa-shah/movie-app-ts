import React, { ChangeEvent, useContext, useState } from "react";
import Layout from "../../layout";
import MovieList from "../../components/movie-list";
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

const Bookmark = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const bookmarkedList = movies.filter((item) => item.isBookmarked === true);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setSearchList(
      bookmarkedList.filter((show) => {
        const title = show.title.toLowerCase();
        if (title.includes(searchValue)) return show.title;
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
            placeholder="Search TV series"
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
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Bookmarks
            </Typography>
            <MovieList recommendList={bookmarkedList} />
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

export default Bookmark;
