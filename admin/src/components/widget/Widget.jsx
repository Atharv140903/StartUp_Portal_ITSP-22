import './widget.scss'

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"

const Widget = ({type}) => {


    let data;

    switch (type){
       
        case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

      default:
      break;

    }

  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>USERS</span>
            <span className='counter'>100</span>
            <span className='link'>See all user</span>
        </div>
        <div className='right'>
            <div className='percentage'>
                <KeyboardArrowUpIcon/>
                20%
            </div>
            <PersonOutlinedIcon className='icon'/>
        </div>
    </div>
  
  )
}



export default Widget