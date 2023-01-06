import { ref, update } from "firebase/database";
import { db } from "./firebase";

export function editTask(
  userId,
  taskId,
  currentDate,
  task,
  description,
  isDone
) {
  const taskData = {
    task,
    description,
    taskId,
    isDone,
  };
  const updates = {};
  updates[`${userId}/${currentDate}/${taskId}`] = taskData;
  return update(ref(db), updates);
}
