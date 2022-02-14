import { loadTasks } from "./actionCreator";

describe("Given a loadTasks action", () => {
  describe("When is invoked", () => {
    test("Then it should return an action with /load-tasks/", () => {
      const expectedAction = { type: "load-tasks" };
      const action = loadTasks();
      expect(action).toEqual(expectedAction);
    });
  });
});
