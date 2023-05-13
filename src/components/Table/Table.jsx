import { Box } from "@mui/material";
import React from "react";
import SingleRow from "../SingleRow/SingleRow";

const head = ["S.No", "Book Name", "Author", "ISBN", "Published Date"];
const data = [
  [1, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [2, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [3, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [4, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [5, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [6, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [7, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [8, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [9, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [10, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [11, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [12, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [13, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [14, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [15, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [16, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [17, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [18, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
  [19, "Harry Potter", "J.K.Rowling", "1234567890", "24/05/02"],
];
const Table = () => {
  return (
    <Box
      sx={{
        px: 15,
      }}
    >
      <Box>
        <SingleRow
          data={head}
          singleRowStyle={{
            fontWeight: "bold",
            backgroundColor: "#987654",
            boxShadow: "none",
            outline: "none",
            borderRadius: "0px",
            py: 1,
            px: 4,
            margin: "16px",
            justifyContent: "space-around",
          }}
        />
      </Box>
      <Box>
        {data?.map((item, key) => (
          <SingleRow
            key={key}
            data={item}
            singleRowStyle={{
              transition: "all 0.5s ease-in-out",
              justifyContent: "space-around",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
                scale: "1.01",
              },
            }}
          />
        )) ?? []}
      </Box>
    </Box>
  );
};

export default Table;
