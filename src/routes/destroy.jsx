import axios from "axios";
import { redirect } from "react-router-dom";


export async function action({ params }) {

  await axios.delete(`https://task-backend-api.onrender.com/tasks/deleteTask/${params.taskId}`);
  return redirect("/board");
}
