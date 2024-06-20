import { Button } from "@mui/material";
import { styled } from "@mui/material";

import LeadFrom from "./leadFrom";

import { LeadGrid } from "./leadGrib";
import { useState } from "react";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function Lead() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const openDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handelEdit = (id) => {
    setEditId(id);
    setSidebarOpen(true);
  };

  return (
    <>
      <LeadFrom open={sidebarOpen} onClose={openDrawer} editId={editId} setEditId={setEditId} />

      <Button
        onClick={() => {
          openDrawer();
          setEditId(null);
        }}
      >
        +Add Leads
      </Button>

      <LeadGrid open={sidebarOpen} openDrawer={openDrawer} handelEdit={handelEdit} editI={editId} />
    </>
  );
}
