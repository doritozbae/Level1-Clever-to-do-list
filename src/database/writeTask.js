import { ref, set } from "firebase/database";
import { db } from "./firebase";

export async function writeTask(userId, currentDate, task, description) {
  const date = new Date();
  const taskId = date.setDate(date.getDate());
  await set(ref(db, `${userId}/${currentDate}/${taskId}`), {
    taskId,
    task,
    description,
    isDone: false,
  });
}
