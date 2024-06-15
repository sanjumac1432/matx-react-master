import React from "react";
import { Button, Drawer, Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "../material-kit/forms/SimpleForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",

  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));
export default function LeadFrom(props) {
  const { open, onClose,editId} = props;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {/* Your sidebar content */}
      <Container>
        <Stack spacing={3}>
          <SimpleCard title="Add Lead">
            <SimpleForm  editId={editId}/>
          </SimpleCard>
        </Stack>
      </Container>
      <Button onClick={onClose}>Close Sidebar</Button>
    </Drawer>
  );
}
