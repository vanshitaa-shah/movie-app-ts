import { Box, Paper } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Layout from "../../layout";

const Home = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          a
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;
