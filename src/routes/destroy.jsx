import axios from "axios";
import { redirect } from "react-router-dom";


export async function action({ params }) {

  await axios.delete(`http://localhost:4000/tasks/deleteTask/${params.taskId}`);
  return redirect("/board");
}