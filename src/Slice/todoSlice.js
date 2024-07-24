import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        task: [
            {id: 1, taskName: 'Meeting with John S', createdAt: '23rd july' },
            {id: 2, taskName: 'Leads follow up', createdAt: '24th July' },
            {id: 3, taskName: 'Fun activity Planning', createdAt: '24th July' }
        ]
    }, 
    reducers:{
        addTask: (state, action) => {
            state.task.push(action.payload);
        },
        updateTask: (state, action) => {
            const { index, updatedTaskDesc } = action.payload;
            state.task[index] = { ...state.task[index], ...updatedTaskDesc };
          },
        deleteTask: (state, action) => {
            const index = action.payload;
            state.task.splice(index, 1);
        }
    }     
})

export const {addTask, deleteTask} = todoSlice.actions
export default todoSlice.reducer