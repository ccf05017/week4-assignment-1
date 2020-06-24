import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('update task title', () => {
    it('change task title', () => {
      const previousState = {
        taskTitle: '',
      };

      const newState = reducer(previousState, updateTaskTitle('New Title'));

      expect(newState.taskTitle).toBe('New Title');
    });
  });

  describe('add task', () => {
    function reduceAddTask(taskTitle) {
      const previousState = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(previousState, addTask());
    }

    context('with a task title', () => {
      it('appends a new task into tasks', () => {
        const previousTaskTitle = 'New Task';
        const expectedTasksSize = 1;

        const newState = reduceAddTask(previousTaskTitle);

        expect(newState.tasks).toHaveLength(expectedTasksSize);
        expect(newState.tasks[0].id).not.toBeUndefined();
        expect(newState.tasks[0].title).toBe(previousTaskTitle);
      });

      it('clear task title', () => {
        const previousTaskTitle = 'New Task';
        const expectedTaskTitle = '';

        const newState = reduceAddTask(previousTaskTitle);

        expect(newState.taskTitle).toBe(expectedTaskTitle);
      });
    });

    context('without a task title', () => {
      it('appends a new task into tasks', () => {
        const previousTaskTitle = '';
        const expectedTasksSize = 0;

        const newState = reduceAddTask(previousTaskTitle);

        expect(newState.tasks).toHaveLength(expectedTasksSize);
      });
    });
  });

  describe('delete task', () => {
    context('try delete exist task', () => {
      it('remove the selected task in tasks', () => {
        const deleteTargetId = 100;
        const expectedTasksSize = 1;

        const previousState = {
          tasks: [
            { id: 100, taskTitle: 'delete target' },
            { id: 101, taskTitle: 'will remain' },
          ],
        };

        const newState = reducer(previousState, deleteTask(deleteTargetId));

        expect(newState.tasks).toHaveLength(expectedTasksSize);
      });
    });

    context('try delete not exist task', () => {
      it("doesn't work", () => {
        const deleteTargetId = 100;
        const expectedTasksSize = 1;

        const previousState = {
          tasks: [
            { id: 101, taskTitle: 'will remain' },
          ],
        };

        const newState = reducer(previousState, deleteTask(deleteTargetId));

        expect(newState.tasks).toHaveLength(expectedTasksSize);
      });
    });
  });
});
