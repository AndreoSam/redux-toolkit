import React, { useState } from "react";
import { addUser } from "../../redux/slice/CrudSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
const Add = () => {
  let [state, setState] = useState();

  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //validation
  let [fnameError, setfnameError] = useState(false);
  let [lnameError, setlnameError] = useState(false);
  let [addressError, setaddressError] = useState(false);
  let [pincodeError, setpincodeError] = useState(false);
  const [validated, setValidated] = useState(false);

  //handle change
  const handleChange = (event) => {
    let { value, name } = event.target;
    // console.log(name, value);
    setState({ ...state, [name]: value });
    switch (name) {
      case "fname":
        if (!value || value.length < 1 || value.length > 15) {
          setfnameError(true);
          console.log("First name must be between 1 and 15 characters");
        } else {
          setfnameError(false);
        }
        break;
      case "lname":
        if (!value || value.length < 1 || value.length > 15) {
          setlnameError(true);
          console.log("Last name must be between 1 and 15 characters");
        } else {
          setlnameError(false);
        }
        break;
      case "address":
        if (!value) {
          setaddressError(true);
          console.log("Please slecect your address");
        } else {
          setaddressError(false);
        }
        break;
      case "pincode":
        if (!value || value.length !== 7) {
          setpincodeError(true);
          console.log("Please enter 7 digit pincode");
        } else {
          setpincodeError(false);
        }
        break;
      default:
        console.log("");
    }
  };

  //submit handler
  const submitHandler = (event) => {
    // event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();

    if (!fnameError || !lnameError || !addressError || !pincodeError) {
      dispatch(
        addUser({
          id: users[users.length - 1].id + 1,
          // fname: state.fname,
          // lname: state.lname,
          // address: state.address,
          // pincode: state.pincode,
          ...state
        })
      );
      navigate("/");
    }
    // }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
      onSubmit={submitHandler}
    >
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>

        {/* First name */}
        <Form.Group controlId="validationCustom01">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name="fname"
            className="form-control"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid" style={{ fontSize: "16px", marginLeft: "0.5rem" }}>
            <p>*First name must be between 1 and 15 characters</p>
          </Form.Control.Feedback>

          {!fnameError ? (
            <Form.Control.Feedback
              style={{
                fontSize: "16px",
                marginLeft: "0.5rem",
                color: "darkgreen",
              }}
            >
              <p>Looks Good!</p>
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>

        {/* Last name */}
        <Form.Group controlId="validationCustom01">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            required
            type="text"
            name="lname"
            className="form-control"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid" style={{ fontSize: "16px", marginLeft: "0.5rem" }}>
            <p>*Last name must be between 1 and 15 characters</p>
          </Form.Control.Feedback>

          {!lnameError ? (
            <Form.Control.Feedback
              style={{
                fontSize: "16px",
                color: "darkgreen",
                marginLeft: "0.5rem",
              }}
            >
              <p>Looks Good!</p>
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>

        {/* Address */}
        <Form.Group controlId="validationCustom01">
          <Form.Label>Address:</Form.Label>
          <Form.Select
            required
            name="address"
            className="form-control"
            placeholder="Select your address"
            onChange={handleChange}
            defaultValue={""}
          >
            <option value=""></option>
            <option value="barrackpore">Barrackpore</option>
            <option value="sealdah">Sealdah</option>
            <option value="dumdum">Dum Dum</option>
            <option value="sodhpur">Sodhpur</option>
            <option value="titagarh">Titagarh</option>
            <option value="bidhannagar">Bidhannagar</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid" style={{ fontSize: "16px", marginLeft: "0.5rem" }}>
            <p>*Please select your address</p>
          </Form.Control.Feedback>

          {!addressError ? (
            <Form.Control.Feedback
              style={{
                fontSize: "16px",
                color: "darkgreen",
                marginLeft: "0.5rem",
              }}
            >
              <p>Looks Good!</p>
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>

        {/* Pincode */}
        <Form.Group controlId="validationCustom01">
          <Form.Label>Pincode:</Form.Label>
          <Form.Control
            required
            type="number"
            name="pincode"
            className="form-control"
            placeholder="Enter your pincode"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid" style={{ fontSize: "16px", marginLeft: "0.5rem" }}>
            <p>*Please enter 7 digit pincode</p>
          </Form.Control.Feedback>

          {!pincodeError ? (
            <Form.Control.Feedback
              style={{
                fontSize: "16px",
                color: "darkgreen",
                marginLeft: "0.5rem",
              }}
            >
              <p>Looks Good!</p>
            </Form.Control.Feedback>
          ) : (
            ""
          )}
        </Form.Group>

        <br />
        <button className="btn btn-info">Submit</button>
      </div>
    </Form>
  );
};

export default Add;
