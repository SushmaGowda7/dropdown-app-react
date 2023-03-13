import classes from './Dropdown.module.css';
import React, { Fragment, useState } from 'react'
import RadioButtons from './RadioButtons';
import Header from './Header';

const Dropdown = () => {
    const [dropDownValues, setDropDownValues] = useState({
        dropdown1: "",
        dropdown2: "",
        dropdown3: "",
        dropdown4: "",
        dropdown5: "",
        dropdown6: ""
      });

      const handleDropdownChange = (e) => {
        const { name, value } = e.target;
        setDropDownValues((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const disableDropDowns = (dropdownName) => {
        const dropdownNames = [
          "dropdown1",
          "dropdown2",
          "dropdown3",
          "dropdown4",
          "dropdown5",
        ];
        const disableValues = {};
        dropdownNames.forEach((name) => {
          if (name !== dropdownName) {
            disableValues[name] = "";
          }
        });
        setDropDownValues((prevState) => ({
          ...prevState,
          ...disableValues
        }));
      };
      
  return (
    <Fragment>
    <Header />
    <div className={classes.dropdown}>
    <label htmlFor="dropdown1">RECEIVING DATE</label>
    <select
      id="dropdown1"
      name="dropdown1"
      value={dropDownValues.dropdown1}
      onChange={(e) => {
        handleDropdownChange(e);
        disableDropDowns("dropdown1");
      }}
    >
      <option value="">-------------------------</option>
      <option value="opt1">Unique id</option>
      <option value="opt2">Name</option>
      <option value="opt3">Mobile</option>
      <option value="opt4">Alternative Mobile</option>
      <option value="opt5">Email</option>
      <option value="opt6">Adress</option>
      <option value="opt7">Date of birth</option>
      <option value="opt8">Source</option>
      <option value="opt9">Status</option>
      <option value="opt10">City</option>
      <option value="opt11">Comments</option>
      <option value="opt12">Item/Product Name</option>
      <option value="opt13">Organisation Name</option>
    </select>
    <RadioButtons />
    <br/>
    <label htmlFor="dropdown2">LOCATION</label>
    <select
      id="dropdown2"
      name="dropdown2"
      value={dropDownValues.dropdown2}
      onChange={(e) => {
        handleDropdownChange(e);
        disableDropDowns("dropdown2");
      }}
    >
    <option value="">-------------------------</option>
    <option value="opt1">Unique id</option>
    <option value="opt2">Name</option>
    <option value="opt3">Mobile</option>
    <option value="opt4">Alternative Mobile</option>
    <option value="opt5">Email</option>
    <option value="opt6">Adress</option>
    <option value="opt7">Date of birth</option>
    <option value="opt8">Source</option>
    <option value="opt9">Status</option>
    <option value="opt10">City</option>
    <option value="opt11">Comments</option>
    <option value="opt12">Item/Product Name</option>
    <option value="opt13">Organisation Name</option>
    </select>
    <RadioButtons />
    <br/>
    <label htmlFor="dropdown3">ZH NAME</label>
    <select
      id="dropdown3"
      name="dropdown3"
      value={dropDownValues.dropdown3}
      onChange={(e) => {
        handleDropdownChange(e);
        disableDropDowns("dropdown3");
      }}
    >
    <option value="">-------------------------</option>
    <option value="opt1">Unique id</option>
    <option value="opt2">Name</option>
    <option value="opt3">Mobile</option>
    <option value="opt4">Alternative Mobile</option>
    <option value="opt5">Email</option>
    <option value="opt6">Adress</option>
    <option value="opt7">Date of birth</option>
    <option value="opt8">Source</option>
    <option value="opt9">Status</option>
    <option value="opt10">City</option>
    <option value="opt11">Comments</option>
    <option value="opt12">Item/Product Name</option>
    <option value="opt13">Organisation Name</option>
    </select>
    <RadioButtons />
    <br/>
    <label htmlFor="dropdown4">SM NAME</label>
    <select
      id="dropdown4"
      name="dropdown4"
      value={dropDownValues.dropdown4}
      onChange={(e) => {
        handleDropdownChange(e);
        disableDropDowns("dropdown4");
      }}
    >
    <option value="">-------------------------</option>
    <option value="opt1">Unique id</option>
    <option value="opt2">Name</option>
    <option value="opt3">Mobile</option>
    <option value="opt4">Alternative Mobile</option>
    <option value="opt5">Email</option>
    <option value="opt6">Adress</option>
    <option value="opt7">Date of birth</option>
    <option value="opt8">Source</option>
    <option value="opt9">Status</option>
    <option value="opt10">City</option>
    <option value="opt11">Comments</option>
    <option value="opt12">Item/Product Name</option>
    <option value="opt13">Organisation Name</option>
    </select>
    <RadioButtons />
    <br/>
    <label htmlFor="dropdown5">PARTNER NAME</label>
    <select
      id="dropdown5"
      name="dropdown5"
      value={dropDownValues.dropdown5}
      onChange={(e) => {
        handleDropdownChange(e);
        disableDropDowns("dropdown5");
      }}
    >
    <option value="">-------------------------</option>
    <option value="opt1">Unique id</option>
    <option value="opt2">Name</option>
    <option value="opt3">Mobile</option>
    <option value="opt4">Alternative Mobile</option>
    <option value="opt5">Email</option>
    <option value="opt6">Adress</option>
    <option value="opt7">Date of birth</option>
    <option value="opt8">Source</option>
    <option value="opt9">Status</option>
    <option value="opt10">City</option>
    <option value="opt11">Comments</option>
    <option value="opt12">Item/Product Name</option>
    <option value="opt13">Organisation Name</option>
    </select>
    <RadioButtons />
    </div>
    </Fragment>
  )
}

export default Dropdown;
