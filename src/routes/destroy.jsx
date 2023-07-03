import axios from "axios";
import { redirect } from "react-router-dom";



export async function action({ params }) {

  await axios.delete(`${import.meta.env.VITE_API_URL}tasks/deleteTask/${params.taskId}`);
  return redirect("/board");
}
