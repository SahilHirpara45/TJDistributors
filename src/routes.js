import React from "react";
import {
  EquipmentInfo,
  InspectionTypesAddForm,
  InspectionLine,
} from "./views/ManageInspectionTypes/InspectionTypesAddForm";

import NewDashboard from "./views/NewDashboard/NewDashboard";
import Inspections from "./views/Inspections/Inspections";
import InspectionsReport from "./views/ManageInspectionTypes/InspectionsReport";
import ManageInspectionTypes from "./views/ManageInspectionTypes/ManageInspectionTypes";

import {
  MaintainInspectionTypes,
  MaintainEquipementInfo,
  MaintainLineItems,
} from "./views/ManageInspectionTypes/MaintainInspectionTypes";

import ManageCustomers from "./views/ManagerCustomers/ManageCustomers";

import MaintainList from "./views/ManageInspectionTypes/MaintainList";

import TelescopingSeating from "./views/ManageInspectionTypes/TelescopingSeating";

import ManageUser from "./views/ManageUser/ManageUser";

import AddUser from "./views/AddUser/AddUser";
import ShowInspection from "./views/Inspections/ShowInspection";

const routes = [
  // { path: "/", exact: true, element: NewDashboard },
  { path: "/dashboard", name: "Dashboard", element: NewDashboard },
  { path: "/inspections/open", name: "Open Inspections", element: Inspections },
  { path: "/inspections/completed", name: "Completed Inspections", element: Inspections },
  { path: "/inspections/show-inspection/:id", name: "Show Inspections", element: ShowInspection },
  {
    path: "/inspections/report",
    name: "Inspections Report",
    element: InspectionsReport,
  },
  {
    path: "/inspections/list",
    name: "Represtative List",
    element: MaintainList,
  },
  {
    path: "/inspections/seating",
    name: "Telescoping Seating Inspection",
    element: TelescopingSeating,
  },
  {
    path: "/inspections/:type",
    name: "Maintain Inspection Types",
    element: MaintainInspectionTypes,
  },
  {
    path: "/inspections/add",
    name: "Inspection Types Add Form",
    element: InspectionTypesAddForm,
  },
  {
    path: "/inspections/equipmentinfo/:id",
    name: "EquipmentInfo Types Add Form",
    element: EquipmentInfo,
  },
  {
    path: "/inspections/equipmentinfolist/:id",
    name: "EquipmentInfo Types Add Form",
    element: MaintainEquipementInfo,
  },
  {
    path: "/inspections/inspectionlinelist/:id",
    name: "inspectionline Types Add Form",
    element: MaintainLineItems,
  },
  {
    path: "/inspections/inspectionline/:id",
    name: "EquipmentInfo Types Add Form",
    element: InspectionLine,
  },
  {
    path: "/admin/inspectionTypes",
    name: "Manage Inspection Types",
    element: ManageInspectionTypes,
  },
  {
    path: "/admin/customers",
    name: "Manage Customers",
    element: ManageCustomers,
  },
  {
    path: "users",
    name: "Manage Users",
    element: ManageUser,
  },
  {
    path: "/addUser",
    name: "Add User",
    element: AddUser,
  },
];

export default routes;
