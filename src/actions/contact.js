import axios from "axios";
import { CREATE_CONTACT_FORM } from "./types";

export const createContact = (formData) => async (dispatch) => {
  try {
    let { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/contact/create`,
      formData
    );

    if (data.ok) {
      return data;
    } else {
      throw "There was an error when sending message";
    }
  } catch (error) {
    return error;
  }
};
