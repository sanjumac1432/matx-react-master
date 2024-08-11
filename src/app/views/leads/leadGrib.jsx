// import { AgGridReact } from "ag-grid-react";
// import {
//   LeadLoading,
//   callDetailsRequest,
//   changeRequest,
//   deleteLoading,
//   getLeadLoading
// } from "app/slice/slice";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { Button, FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import CallIcon from "@mui/icons-material/Call";
// import EmailIcon from "@mui/icons-material/Email";

// export const LeadGrid = ({ open, handelEdit, editId }) => {
//   const leadSelect = useSelector((state) => state?.lead?.data);
//   const [openDialog, setOpenDialog] = useState(false);

//   // call data code start
//   const [callData, SetCallData] = useState({
//     _id: "",
//     recipient: "",
//     startDate: "",
//     callDuration: "",
//     callNotes: ""
//   });

//   const { recipient, startDate, callDuration, callNotes } = callData;

//   const onChangeCallData = (event) => {
//     SetCallData({ ...callData, [event.target.name]: event.target.value });
//   };

//   const handleSaveCallData = () => {
//     Dis(callDetailsRequest());
//     console.log(callData);
//   };

//   const Dis = useDispatch();

//   // delete row data code here
//   const [ids, setId] = useState(null);

//   useEffect(() => {
//     Dis(getLeadLoading());
//   }, [open, openDialog]);

//   const handelDelete = () => {
//     Dis(deleteLoading([ids]));
//     setOpenDialog(false);
//   };

//   // open modal dialog box code here

//   const OpenDialogBox = () => {
//     setOpenDialog(true);
//   };

//   const CloseDialogBox = () => {
//     setOpenDialog(false);
//   };

//   // code for open from modal for create call
//   const [openFormModal, setOpenFromModal] = useState(false);

//   const handleClickOpen = () => {
//     setOpenFromModal(true);
//     console.log(ids);
//   };

//   const handleCloseFromModal = () => {
//     setOpenFromModal(false);
//   };

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open1 = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const ITEM_HEIGHT = 48;
//   const [colDef, setColDef] = useState([
//     {
//       field: "leadStatus",
//       cellRenderer: (props) => {
//         // const handleChange = (event) => {
//         //   Dis(
//         //     changeRequest(event.target.value,
//         //       _id:props.editId)
//         //   );
//         // };
//         const handleChange = (event, id) => {
//           Dis(changeRequest({ _id: id, leadStatus: event.target.value }));
//         };

//         return (
//           <>
//             <FormControl
//               item
//               lg={6}
//               md={6}
//               sm={12}
//               xs={12}
//               sx={{ mb: 2, minWidth: 200 }}
//               size="large"
//             >
//               <Select
//                 labelId="demo-select-small-label"
//                 id="demo-select-small"
//                 name="leadStatus"
//                 value={props.value}
//                 onChange={(event) => handleChange(event, props.data._id)}
//                 sx={{
//                   width: 100,
//                   textTransform: "capitalize",
//                   p: 0,
//                   height: 30,
//                   border:
//                     props.value === "active"
//                       ? "1px solid #4d8f3a"
//                       : props.value === "pending"
//                       ? "1px solid #a37f08"
//                       : props.value === "sold"
//                       ? " 1px solid #DB5436"
//                       : "initial",
//                   background:
//                     props.value === "active"
//                       ? "#eaf9e6"
//                       : props.value === "pending"
//                       ? "#fbf4dd"
//                       : props.value === "sold"
//                       ? " #ffeeeb"
//                       : "initial",
//                   color:
//                     props.value === "active"
//                       ? "#4d8f3a"
//                       : props.value === "pending"
//                       ? "#a37f08 "
//                       : props.value === "sold"
//                       ? " #DB5436"
//                       : "initial"
//                 }}
//               >
//                 <MenuItem value="active">Active</MenuItem>
//                 <MenuItem value="pending">Pending</MenuItem>
//                 <MenuItem value="sold">Sold</MenuItem>
//               </Select>
//             </FormControl>
//           </>
//         );
//       }
//     },
//     { field: "leadName" },
//     { field: "leadEmail" },
//     { field: "leadPhoneNumber" },
//     {
//       field: "Action",
//       cellRenderer: (props) => {
//         console.log(props);

//         return (
//           <>
//             <IconButton
//               aria-label="more"
//               id="long-button"
//               aria-controls={open1 ? "long-menu" : undefined}
//               aria-expanded={open1 ? "true" : undefined}
//               aria-haspopup="true"
//               onClick={(event) => {
//                 handleClick(event);
//                 setId(props?.data?._id);
//               }}
//             >
//               <MoreVertIcon />
//             </IconButton>
//           </>
//         );
//       }
//     }
//   ]);

//   return (
//     <div className="ag-theme-quartz" style={{ height: 500 }}>
//       <AgGridReact rowData={leadSelect} columnDefs={colDef} />

//       <Menu
//         id="long-menu"
//         MenuListProps={{
//           "aria-labelledby": "long-button"
//         }}
//         anchorEl={anchorEl}
//         open={open1}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: "20ch"
//           }
//         }}
//       >
//         <MenuItem
//           onClick={() => {
//             handelEdit(ids);
//             handleClose();
//           }}
//         >
//           <EditNoteIcon style={{ color: "gray", marginRight: "5px" }} />
//           <span>Edit</span>
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             handleClose();
//             handleClickOpen(true);
//           }}
//         >
//           <CallIcon style={{ color: "gray", marginRight: "5px" }} />
//           <span>Create Call</span>
//         </MenuItem>
//         <MenuItem>
//           <EmailIcon st yle={{ color: "gray", marginRight: "5px" }} />
//           <span>Email Send</span>
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             OpenDialogBox();
//             handleClose();
//           }}
//         >
//           <DeleteIcon style={{ color: "red", marginRight: "5px" }} />
//           <span>Delete</span>
//         </MenuItem>
//         <MenuItem>
//           <RemoveRedEyeIcon style={{ color: "green", marginRight: "5px" }} />
//           <span>View</span>
//         </MenuItem>
//       </Menu>
//       <Dialog
//         open={openDialog}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Delete!"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are You Sure You Want To Delete This Lead
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={CloseDialogBox}>cancel</Button>
//           <Button onClick={handelDelete} autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/*  // dialog form for create call */}

//       <Dialog
//         fullWidth
//         open={openFormModal}
//         onClose={handleCloseFromModal}

//         // PaperProps={{
//         //   component: "form",
//         //   onSubmit: (event) => {
//         //     event.preventDefault();
//         //     const formData = new FormData(event.currentTarget);
//         //     const formJson = Object.fromEntries(formData.entries());
//         //     const email = formJson.email;
//         //     console.log(email);
//         //     handleClose();
//         //   }
//         // }}
//       >
//         <DialogTitle>Add Call</DialogTitle>

//         <DialogContent>
//           <InputLabel id="demo-select-small-label">Recipient</InputLabel>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="recipient"
//             value={recipient}
//             name="recipient"
//             label="recipient"
//             type="text"
//             onChange={onChangeCallData}
//             fullWidth
//           />

//           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <InputLabel id="demo-select-small-label">Start Date</InputLabel>
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               type="datetime-local"
//               name="startDate"
//               value={startDate}
//               // value={leadPhoneNumber || ""}
//               fullWidth
//               onChange={onChangeCallData}
//               //onChange={handleChange}
//               validators={["required"]}
//               errorMessages={["this field is required"]}
//             />
//             <InputLabel id="demo-select-small-label">Call Duration </InputLabel>
//             <TextField
//               autoFocus
//               fullWidth
//               required
//               margin="dense"
//               value={callDuration}
//               type="text"
//               name="callDuration"
//               onChange={onChangeCallData}
//               // value={leadEmail || ""}
//               // onChange={handleChange}
//               validators={["required", "callDuration"]}
//               errorMessages={["this field is required", "callDuration is not valid"]}
//             />
//           </Grid>
//           <InputLabel id="demo-select-small-label">Call Note</InputLabel>

//           <TextField
//             autoFocus
//             fullWidth
//             required
//             margin="dense"
//             value={callNotes}
//             type="text"
//             name="callNotes"
//             onChange={onChangeCallData}
//             // value={leadEmail || ""}
//             // onChange={handleChange}
//             validators={["required", "callNotes"]}
//             errorMessages={["this field is required", "callNotes is not valid"]}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseFromModal}>Close</Button>
//           <Button type="submit" onClick={handleSaveCallData}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

import { AgGridReact } from "ag-grid-react";
import {
  LeadLoading,
  callDetailsRequest,
  changeRequest,
  deleteLoading,
  getLeadLoading
} from "app/slice/slice";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState, useEffect } from "react";
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
import { Button, FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export const LeadGrid = ({ open, handelEdit, editId }) => {
  const leadSelect = useSelector((state) => state?.lead?.data);

  const [openDialog, setOpenDialog] = useState(false);
  const [openFormModal, setOpenFromModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ids, setId] = useState(null);
  const [callData, SetCallData] = useState({
    createByLead: "",
    recipient: "",
    startDate: "",
    callDuration: "",
    callNotes: "",
    createByContact: "",
    createBy: "64d33173fd7ff3fa0924a109",
    sender: "64d33173fd7ff3fa0924a109"
  });
  const { recipient, startDate, callDuration, callNotes } = callData;
  const ITEM_HEIGHT = 48;
  const Dis = useDispatch();
  const open1 = Boolean(anchorEl);

  useEffect(() => {
    Dis(getLeadLoading());
  }, [open, openDialog]);
  console.log(leadSelect);
  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);

    setId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    // Find the selected lead data by ID
    const selectedLead = leadSelect.find((lead) => lead._id === ids);

    // Set recipient field with the selected lead's phone number
    SetCallData({
      ...callData,
      createByLead: ids,
      recipient: selectedLead?.leadPhoneNumber || ""
    });

    setOpenFromModal(true);
  };

  const handleCloseFromModal = () => {
    setOpenFromModal(false);
  };

  const onChangeCallData = (event) => {
    SetCallData({ ...callData, [event.target.name]: event.target.value });
  };

  const handleSaveCallData = () => {
    Dis(callDetailsRequest(callData));
    SetCallData({
      createByLead: "",
      recipient: "",
      startDate: "",
      callDuration: "",
      callNotes: "",
      createByContact: "",
      createBy: "64d33173fd7ff3fa0924a109",
      sender: "64d33173fd7ff3fa0924a109"
    });
    handleCloseFromModal();
    console.log(callData);
  };

  const handelDelete = () => {
    Dis(deleteLoading([ids]));
    setOpenDialog(false);
  };

  const OpenDialogBox = () => {
    setOpenDialog(true);
  };

  const CloseDialogBox = () => {
    setOpenDialog(false);
  };

  const colDef = [
    {
      field: "leadStatus",
      cellRenderer: (props) => {
        const handleChange = (event, id) => {
          Dis(changeRequest({ _id: id, leadStatus: event.target.value }));
        };

        return (
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
                    ? "1px solid #DB5436"
                    : "initial",
                background:
                  props.value === "active"
                    ? "#eaf9e6"
                    : props.value === "pending"
                    ? "#fbf4dd"
                    : props.value === "sold"
                    ? "#ffeeeb"
                    : "initial",
                color:
                  props.value === "active"
                    ? "#4d8f3a"
                    : props.value === "pending"
                    ? "#a37f08"
                    : props.value === "sold"
                    ? "#DB5436"
                    : "initial"
              }}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="sold">Sold</MenuItem>
            </Select>
          </FormControl>
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
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open1 ? "long-menu" : undefined}
            aria-expanded={open1 ? "true" : undefined}
            aria-haspopup="true"
            onClick={(event) => handleClick(event, props.data._id)}
          >
            <MoreVertIcon />
          </IconButton>
        );
      }
    }
  ];

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
        <MenuItem
          onClick={() => {
            handleClose();
            handleClickOpen();
          }}
        >
          <CallIcon style={{ color: "gray", marginRight: "5px" }} />
          <span>Create Call</span>
        </MenuItem>
        <MenuItem>
          <EmailIcon style={{ color: "gray", marginRight: "5px" }} />
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
        onClose={CloseDialogBox}
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
          <Button onClick={CloseDialogBox}>Cancel</Button>
          <Button onClick={handelDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog fullWidth open={openFormModal} onClose={handleCloseFromModal}>
        <DialogTitle>Add Call</DialogTitle>
        <DialogContent>
          <InputLabel id="demo-select-small-label">Recipient</InputLabel>
          <TextField
            autoFocus
            disabled
            required
            margin="dense"
            id="recipient"
            value={recipient}
            name="recipient"
            type="text"
            onChange={onChangeCallData}
            fullWidth
          />

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <InputLabel id="demo-select-small-label">Start Date</InputLabel>
            <TextField
              autoFocus
              required
              margin="dense"
              type="datetime-local"
              name="startDate"
              value={startDate}
              fullWidth
              onChange={onChangeCallData}
            />
            <InputLabel id="demo-select-small-label">Call Duration</InputLabel>
            <TextField
              autoFocus
              fullWidth
              required
              margin="dense"
              value={callDuration}
              type="text"
              name="callDuration"
              onChange={onChangeCallData}
            />
          </Grid>
          <InputLabel id="demo-select-small-label">Call Note</InputLabel>
          <TextField
            autoFocus
            fullWidth
            required
            margin="dense"
            value={callNotes}
            type="text"
            name="callNotes"
            onChange={onChangeCallData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFromModal}>Close</Button>
          <Button type="button" onClick={handleSaveCallData}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
