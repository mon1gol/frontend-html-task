import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames('sidebar', 'sidebar__text_theme_white', { opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened(v => !v);
  };

  return (
    <div className={containerClassnames}>
      <div className='sidebar__head'>
        <img className='sidebar__icon sidebar__logo' src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
        <div onClick={toggleSidebar}>
          <FontAwesomeIcon className='sidebar__icon' icon={isOpened ? 'angle-left' : 'angle-right'} />
        </div>
      </div>
      <div className='tabs'>
        <div>
          {
            routes.map(route => (
              <div
                className='tabs__element'
                key={route.title}
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon className='sidebar__icon' icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))
          }
        </div>
        <div>
          {
            bottomRoutes.map(route => (
              <div
                className='tabs__element'
                key={route.title}
                onClick={() => {
                  goToRoute(route.path);
                }}
              >
                <FontAwesomeIcon className='sidebar__icon' icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
