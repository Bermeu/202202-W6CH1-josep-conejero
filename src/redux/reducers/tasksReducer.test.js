import { loadTasks } from "../actions/actionCreator";
import tasksReducer from "./tasksReducer";

describe("Given a tasksReducer", () => {
  describe("When given a current object and an action", () => {
    test("Then should return a newlist with currentObj and action", () => {
      const currentlist = [
        "Buy batteries",
        "Turn off the attic lamp",
        "Watch 'Jaws' at 22:00",
      ];
      const newList = [
        "Travel to Mexico",
        "Read the fucking manual",
        "Phone my sister tonight",
      ];
      const action = loadTasks(newList);

      const receivedList = tasksReducer(currentlist, action);

      expect(receivedList).toEqual(newList);
    });
  });

  describe("When given a currentlist and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentlist = [
        "Buy batteries",
        "Turn off the attic lamp",
        "Watch 'Jaws' at 22:00",
      ];
      const action = { type: "impossible-task" };

      const receivedList = tasksReducer(currentlist, action);

      expect(receivedList).toEqual(currentlist);
    });
  });
});
