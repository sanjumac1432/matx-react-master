import { AgGridReact } from "ag-grid-react";
import { LeadLoading, changeRequest, deleteLoading, getLeadLoading } from "app/slice/slice";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, FormControl, Select } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";


export const LeadGrid = ({ open, handelEdit, editId }) => {
  const leadSelect = useSelector((state) => state?.lead?.data);
  const [openDialog, setOpenDialog] = useState(false);

  console.log(leadSelect);
  const Dis = useDispatch();

  // delete row data code here
  const [ids, setId] = useState(null);

  useEffect(() => {
    Dis(getLeadLoading());
  }, [open, openDialog]);

  const handelDelete = () => {
    Dis(deleteLoading([ids]));
    setOpenDialog(false);
  };

  // open modal dialog box code here

  const OpenDialogBox = () => {
    setOpenDialog(true);
  };

  const CloseDialogBox = () => {
    setOpenDialog(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;
  const [colDef, setColDef] = useState([
    {
      field: "leadStatus",
      cellRenderer: (props) => {
        // const handleChange = (event) => {
        //   Dis(
        //     changeRequest(event.target.value,
        //       _id:props.editId)
        //   );
        // };
        const handleChange = (event, id) => {
          Dis(changeRequest({ _id: id, leadStatus: event.target.value }));
        };

        return (
          <>
            <FormControl
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{ mb: 2, minWidth: 200 }}
              size="large"
            >
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                name="leadStatus"
                value={props.value}
                onChange={(event) => handleChange(event, props.data._id)}
                sx={{
                  width: 100,
                  textTransform: "capitalize",
                  p: 0,
                  height: 30,
                  border:
                    props.value === "active"
                      ? "1px solid #4d8f3a"
                      : props.value === "pending"
                      ? "1px solid #a37f08"
                      : props.value === "sold"
                      ? " 1px solid #DB5436"
                      : "initial",
                  background:
                    props.value === "active"
                      ? "#eaf9e6"
                      : props.value === "pending"
                      ? "#fbf4dd"
                      : props.value === "sold"
                      ? " #ffeeeb"
                      : "initial",
                  color:
                    props.value === "active"
                      ? "#4d8f3a"
                      : props.value === "pending"
                      ? "#a37f08 "
                      : props.value === "sold"
                      ? " #DB5436"
                      : "initial"
                }}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="sold">Sold</MenuItem>
              </Select>
            </FormControl>
          </>
        );
      }
    },
    { field: "leadName" },
    { field: "leadEmail" },
    { field: "leadPhoneNumber" },
    {
      field: "Action",
      cellRenderer: (props) => {
        return (
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open1 ? "long-menu" : undefined}
              aria-expanded={open1 ? "true" : undefined}
              aria-haspopup="true"
              onClick={(event) => {
                handleClick(event);
                setId(props?.data?._id);
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </>
        );
      }
    }
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={leadSelect} columnDefs={colDef} />

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        <MenuItem
          onClick={() => {
            handelEdit(ids);
            handleClose();
          }}
        >
          <EditNoteIcon style={{ color: "gray", marginRight: "5px" }} />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <CallIcon style={{ color: "gray", marginRight: "5px" }} />
          <span>Create Call</span>
        </MenuItem>
        <MenuItem>
          <EmailIcon st yle={{ color: "gray", marginRight: "5px" }} />
          <span>Email Send</span>
        </MenuItem>
        <MenuItem
          onClick={() => {
            OpenDialogBox();
            handleClose();
          }}
        >
          <DeleteIcon style={{ color: "red", marginRight: "5px" }} />
          <span>Delete</span>
        </MenuItem>
        <MenuItem>
          <RemoveRedEyeIcon style={{ color: "green", marginRight: "5px" }} />
          <span>View</span>
        </MenuItem>
      </Menu>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure You Want To Delete This Lead
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseDialogBox}>cancel</Button>
          <Button onClick={handelDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
