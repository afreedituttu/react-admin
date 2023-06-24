import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows, userColumns } from './datatablesource'
import './datatable.scss'
import { Link } from 'react-router-dom';

const Datatable = () => {
const actionColumn = [
    {field:"action", headerName:"Action", width:200, renderCell:()=>{
        return(<>
            <div className='cellAction'>
                <Link to='/users/1'>
                    <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
            </div>
        </>)
    }}
]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
            Add new User 
            <Link to='/users/new' className='link'>Add new</Link>
        </div>
        <DataGrid
            className='datagrid'
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 9 },
            },
            }} 
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable
