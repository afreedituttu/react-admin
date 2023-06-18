import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ViewListIcon from '@mui/icons-material/ViewList';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Afreedi Admin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LIST</p>
          <li>
            <PersonIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <ViewListIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <AirportShuttleIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL LINKS</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className='icon' />
            <span>Notificatins</span>
          </li>
          <p className='title'>SERICE</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System health</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions'></div>
        <div className='colorOptions'></div>
        <div className='colorOptions'></div>
      </div>
    </div>
  )
}

export default Sidebar
