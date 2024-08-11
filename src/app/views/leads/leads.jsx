import { Button } from "@mui/material";
import { styled } from "@mui/material";

import LeadFrom from "./leadFrom";

import { LeadGrid } from "./leadGrib";
import { useState } from "react";
import Layout1Topbar from "app/components/MatxLayout/Layout1/Layout1Topbar";
import { MatxSearchBox } from "app/components";

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
      <div
        className="Lead-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px"
        }}
      >
        <div
          className="lead"
          style={{
            padding: "0px 20px"
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              margin: "0px"
            }}
          >
            Leads
          </h2>
        </div>
        <div className="Buttons">
          <MatxSearchBox
            style={{
              margin: "0px 10px"
            }}
          />

          <Button
            onClick={() => {
              openDrawer();
              setEditId(null);
            }}
            style={{
              background: "#4791db",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
              padding: " 10px 20px"
            }}
          >
            +Add Leads
          </Button>
        </div>
      </div>

      <LeadFrom open={sidebarOpen} onClose={openDrawer} editId={editId} setEditId={setEditId} />

      <LeadGrid open={sidebarOpen} openDrawer={openDrawer} handelEdit={handelEdit} editI={editId} />
    </>
  );
}
