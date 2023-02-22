import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [values, setValue] = useState({
    Email: "",
    PhoneNumber: "",
    RoomNumber: "",
    RoolNumber: "",
    department: "",
  });
  let temp = JSON.parse(localStorage.getItem("student") || "[]");

  function HandleChange(e) {
    const { name, value } = e.target;
    setValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  }

  function ResetForm() {
    setValue({
      Email: "",
      PhoneNumber: "",
      RoomNumber: "",
      RoolNumber: "",
      department: "",
    });
  }

  const notify = () => {
    toast.success("🦄 Student Data Added Successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function HandleSubmit(e) {
    e.preventDefault();
    temp.push(values);
    localStorage.setItem("student", JSON.stringify(temp));
    notify();
    ResetForm();
  }
  
  return (
    <Card className="container my-5 ">
      <h4>Add Student Details</h4>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="d-flex justify-content-between align-items-center flex-column mt-5"
      >
        <div className="row">
          <div className="col-6">
            <div className="py-3">
              <TextField
                id="outlined-basic"
                label="Email or Name"
                name="Email"
                type={"text"}
                value={values.Email}
                variant="outlined"
                onChange={(e) => HandleChange(e)}
              />
            </div>
            <div className="py-3">
              <TextField
                id="outlined-basic"
                label="PhoneNumber"
                name="PhoneNumber"
                type={"number"}
                value={values.PhoneNumber}
                variant="outlined"
                onChange={(e) => HandleChange(e)}
              />
            </div>

            <div className="py-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  department
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  label="Dept"
                  name="department"
                  value={values.department}
                  onChange={(e) => HandleChange(e)}
                >
                  <MenuItem value={"BSC"}>BSC</MenuItem>
                  <MenuItem value={"BCA"}>BCA</MenuItem>
                  <MenuItem value={"BBA"}>BBA</MenuItem>
                  <MenuItem value={"BCOM"}>BCOM</MenuItem>
                  <MenuItem value={"BA"}>BA</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-6">
            <div className="py-3">
              <TextField
                id="outlined-basic"
                label="RollNumber"
                name="RoolNumber"
                type={"number"}
                value={values.RoolNumber}
                variant="outlined"
                onChange={(e) => HandleChange(e)}
              />
            </div>
            <div className="py-3">
              <TextField
                id="outlined-basic"
                label="RoomNumber"
                name="RoomNumber"
                type={"number"}
                value={values.RoomNumber}
                variant="outlined"
                onChange={(e) => HandleChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="py-5">
          <Button type="submit" variant="contained">
            Add User
          </Button>
        </div>
      </form>
      <ToastContainer />
    </Card>
  );
};

export default Form;
