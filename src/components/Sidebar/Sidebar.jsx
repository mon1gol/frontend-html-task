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

const user = {title: 'John D.', icon: 'fa-solid fa-user', path: '/profile'};

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames('sidebar', 'sidebar_dist', 'sidebar__text_theme_white', { opened: isOpened });
  const [currentPath, setCurrentPath] = useState('');

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
        <div className='tabs_dist'>
          {
            routes.map(route => (
              <div
                className={`tabs__element ${route.path === currentPath ? 'tabs__element_is-selected' : ''}`}
                key={route.title}
                onClick={() => {
                  goToRoute(route.path);
                  setCurrentPath(p => route.path)
                }}
              >
                <FontAwesomeIcon className='sidebar__icon' icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))
          }
        </div>
        <div className='tabs_dist'>
          {
            bottomRoutes.map(route => (
              <div
                className={`tabs__element ${route.path === currentPath ? 'tabs__element_is-selected' : ''}`}
                key={route.title}
                onClick={() => {
                  goToRoute(route.path);
                  setCurrentPath(p => route.path)
                }}
              >
                <FontAwesomeIcon className='sidebar__icon' icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <div className='line'></div>
        <div className='profile'>
          <div className='profile__content'>
            <FontAwesomeIcon className='sidebar__icon profile__icon' icon={user.icon} />
            <div className='profile__title profile__text'>
              <span className='profile__placeholder'>User Account</span>
              <span>{ user.title }</span>
            </div>
          </div>
          <div className='sidebar__icon_type_profile'>
            <FontAwesomeIcon className='sidebar__icon' icon={'fa-solid fa-arrow-up'} />
            <FontAwesomeIcon className='sidebar__icon' icon={'fa-solid fa-arrow-down'} />
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
