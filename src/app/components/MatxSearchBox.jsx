import { useState, Fragment } from "react";
import { Icon, IconButton, styled } from "@mui/material";

import { topBarHeight } from "app/utils/constant";

// STYLED COMPONENTS
const SearchContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 9,
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: topBarHeight,
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  "&::placeholder": {
    color: theme.palette.text.primary
  }
}));

const SearchInput = styled("input")(({ theme }) => ({
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  paddingLeft: "20px",
  height: "calc(100% - 5px)",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  "&::placeholder": { color: theme.palette.text.primary }
}));

export default function MatxSearchBox() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon sx={{ color: "text.primary" }}>search</Icon>
        </IconButton>
      )}

      {open && (
        <SearchContainer
          style={{
            top: "15px",
            background: "#ffffff",
            color: "rgb(0 0 0)"
          }}
        >
          <SearchInput
            type="text"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              paddingLeft: "20px",
              height: "calc(100% - 5px)",
              background: "#ffffff",
              color: "rgb(0 0 0)"
            }}
            placeholder="Search here..."
            autoFocus
          />
          <IconButton
            style={{
              background: "#ffffff",
              color: "rgb(0 0 0)"
            }}
            onClick={toggle}
            sx={{ mx: 2, verticalAlign: "middle" }}
          >
            <Icon sx={{ color: "text.primary" }}>close</Icon>
          </IconButton>
        </SearchContainer>
      )}
    </Fragment>
  );
}
