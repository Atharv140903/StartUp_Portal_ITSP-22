export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "ldap",
      headerName: "LDAP",
      width: 150,
    },
  
    {
      field: "department",
      headerName: "Department",
      width: 200,
    },

    {
        field: "yof",
        headerName: "Year of Study",
        width: 150,
    },

    {
        field: "email",
        headerName: "Email",
        width: 200,
      },

    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      ldap: "21D180001",
      department: "ESED",
      yof: 1,
      email:"example@gmail.com",
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180002",
      status: "passive",
      department: "ESED",
      yof: 2,
      email:"example@gmail.com",
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180003",
      status: "pending",
      department: "MEMS",
      yof: 4,
      email:"example@gmail.com",
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180004",
      status: "active",
      department: "Engineering Physics",
      yof: 5,
      email:"example@gmail.com",
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180005",
      status: "passive",
      department: "ESED",
      yof: 2,
      email:"example@gmail.com",
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180006",
      status: "active",
      department: "ESED",
      yof: 3,
      email:"example@gmail.com",
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180007",
      status: "passive",
      department: "ESED",
      yof: 1,
      email:"example@gmail.com",
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180008",
      status: "active",
      department: "Chemical Engineering",
      yof: 4,
      email:"example@gmail.com",
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180009",
      status: "pending",
      department: "Computer Science",
      yof: 2,
      email:"example@gmail.com",
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ldap: "21D180010",
      status: "active",
      department: "ESED",
      yof: 5,
      email:"example@gmail.com",
    },
  ];