import { ref, update } from "firebase/database";
import { db } from "./firebase";

export function deleteTaskFromDB(userId, taskId, currentDate) {
  const updates = {};
  updates[`${userId}/${currentDate}/${taskId}`] = null;
  return update(ref(db), updates);
}
