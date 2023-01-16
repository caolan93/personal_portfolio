import axios from "axios";
import { CREATE_CONTACT_FORM } from "./types";

export const createContact = (data) => (dispatch, getState) => {
  axios.post(`${process.env.API_URL}/contact`);
};
