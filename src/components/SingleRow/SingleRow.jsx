import { Paper, Typography } from "@mui/material";
import React from "react";

const SingleRow = ({ data, singleRowStyle }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
        outline: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        py: 1,
        px: 4,
        margin: "16px",
        ...singleRowStyle,
      }}
    >
      {data?.map((item, key) => (
        <Typography key={key} sx={{ fontWeight: "inherit" }}>
          {item}
        </Typography>
      )) ?? []}
    </Paper>
  );
};

export default SingleRow;
