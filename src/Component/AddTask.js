import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../Slice/todoSlice'

const AddTask = () => {
    const [id, setId] = useState('')
    const [task, setTask] = useState('')

    const dispatch = useDispatch();


    const handleAddTask=()=>{
        dispatch(addTask({id: id, taskName: task, createdAt: '24th July'}))
        setId('')
        setTask('')
    }
  return (
    <div>
<div className="modal" tabIndex={-1}  id="exampleModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">New Task Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <form>
            <div className="mb-3">
                <label htmlFor="taskId" className="form-label">Id</label>
                <input type="number" className="form-control" id="taskId" onChange={(e)=>{setId(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label htmlFor="taskName" className="form-label">Task Name</label>
                <input type="text" className="form-control" id="taskName" onChange={(e)=>{setTask(e.target.value)}} />
            </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{handleAddTask()}}>Save changes</button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default AddTask