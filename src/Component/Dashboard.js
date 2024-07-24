import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTask from './AddTask';
import { deleteTask } from '../Slice/todoSlice';



const Dashboard = () => {
    const dataList = useSelector(state => state.todo.task);
    const dispatch = useDispatch()
    console.log('redux data', dataList)
    return (
        <div className='mx-5'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Created</th>
                        <th scope="col">Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map(data=>{
                        return(
                            <tr>
                                <th scope="row">{data.id}</th>
                                <td>{data.taskName}</td>
                                <td>{data.createdAt}</td>
                                <td><button type="button" class="btn btn-primary me-2">Update</button>
                                <button type="button" class="btn btn-danger" onClick={()=>{dispatch(deleteTask(data.id))}}>Delete</button></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>

            <div align='right'>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Task</button>
            </div>

            <AddTask />
        </div>
    )
}

export default Dashboard