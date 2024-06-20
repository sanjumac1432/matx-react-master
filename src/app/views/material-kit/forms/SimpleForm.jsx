// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";

// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  FormControl,
  Grid,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  styled
} from "@mui/material";
import { Span } from "app/components/Typography";
import {
  AddEditInfoRequest,
  LeadLoading,
  editLeadRequest,
  editLeadRequestSuccess
} from "app/slice/slice";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
}));

const SimpleForm = (props) => {
  const { editId, setEditId, onClose } = props;

  const [state, setState] = useState({
    leadStatus: "",
    leadName: "",
    leadEmail: "",
    leadPhoneNumber: "",
    moduleId: "665aa535d8c91a9090d0db43"
  });
  const { leadStatus, leadName, leadEmail, leadPhoneNumber } = state;
  const d = useSelector((y) => y.lead?.editObj?.lead);
  console.log(d);
  const dis = useDispatch();

  console.log(d);
  useEffect(() => {
    if (editId) {
      dis(editLeadRequest(editId));
    }
  }, [editId]);

  useEffect(() => {
    //&& editId != null
    if (d && editId != null) {
      setState({
        leadStatus: d.leadStatus,
        leadName: d.leadName,
        leadEmail: d.leadEmail,
        leadPhoneNumber: d.leadPhoneNumber,
        moduleId: "665aa535d8c91a9090d0db43"
      });
    } else {
      setState({
        leadStatus: "",
        leadName: "",
        leadEmail: "",
        leadPhoneNumber: "",
        moduleId: "665aa535d8c91a9090d0db43"
      });
    }
  }, [d]);

  const handleSubmit = () => {
    if (editId) {
      dis(AddEditInfoRequest({ ...state, _id: editId }));
      // setEditId(null);
    } else {
      dis(LeadLoading(state));
    }
    setState({
      leadStatus: "",
      leadName: "",
      leadEmail: "",
      leadPhoneNumber: "",
      moduleId: "665aa535d8c91a9090d0db43"
    });

    // dis({
    //   leadStatus: "",
    //   leadName: "",
    //   leadEmail: "",
    //   leadPhoneNumber: ""
    // });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // const handleDateChange = (date) => setState({ ...state, date });

  return (
    <div>
      <ValidatorForm
        onSubmit={() => {
          handleSubmit();
          onClose();
        }}
        onError={() => null}
      >
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <FormControl
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              sx={{ mb: 2, minWidth: 200 }}
              size="large"
            >
              <InputLabel id="demo-select-small-label">Active Lead Status</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                name="leadStatus"
                value={leadStatus}
                label="Active Lead Status"
                onChange={handleChange}
              >
                <MenuItem value=""> </MenuItem>
                <MenuItem value="active">active</MenuItem>
                <MenuItem value="pending">pending</MenuItem>
                <MenuItem value="sold">sold</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="text"
              name="leadName"
              label="Lead Name"
              onChange={handleChange}
              value={leadName || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="leadPhoneNumber"
              value={leadPhoneNumber || ""}
              label="Mobile Number"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="email"
              name="leadEmail"
              label="Email"
              value={leadEmail || ""}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
