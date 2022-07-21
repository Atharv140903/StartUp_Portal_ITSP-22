import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
     
           <Link to={'/users/test'}>
            <div className="viewButton">View</div>
           </Link>
            <div className="deleteButton">
              Delete
            </div>
          </div>
        );
      },
    },
];

const Datatable = () => {
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        columns={userColumns.concat(actionColumn)}
        rows={userRows}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
