import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const user = { 
  title: 'John D.', 
  fullName: 'John Doe', 
  email: 'profile@wasd.com',
  icon: 'fa-solid fa-user', 
  path: '/profile'
};

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames('sidebar', 'sidebar_dist', 'sidebar__text_theme_white',  {'sidebar_hidden': isOpened},  { opened: isOpened });

  const [currentPath, setCurrentPath] = useState('');
  const [isModalActive, setModalActive] = useState(false);

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened(v => !v);
  };

  return (
    <div>
      <div className={containerClassnames}>
        <div className='sidebar__head'>
          <div className='sidebar__head_dist'>
            <img className='sidebar__icon sidebar__logo sidebar__logo_dist' src={logo} alt="TensorFlow logo" />
            <span>TensorFlow</span>
          </div>
          <div onClick={toggleSidebar}>
            <FontAwesomeIcon className={`sidebar__icon sidebar__icon_pointer ${isOpened ? 'arrow_right' : ''}`} icon={isOpened ? 'angle-left' : 'angle-right'} />
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
            <div onClick={() => { setModalActive(v => !v) }} className='sidebar__icon_type_profile'>
              <FontAwesomeIcon className='sidebar__icon' icon={'fa-solid fa-arrow-up'} />
              <FontAwesomeIcon className='sidebar__icon' icon={'fa-solid fa-arrow-down'} />
            </div>

          </div>
          <div className={`${isModalActive ? 'modal' : 'modal_hidden'}`}>
            <div>
              <div className='profile__content profile__content_modal'>
                <FontAwesomeIcon className='sidebar__icon profile__icon' icon={user.icon} />
                <div className='profile__title profile__text'>
                  <span>{ user.fullName }</span>
                  <span className='profile__placeholder'>{ user.email }</span>
                </div>
              </div>
              <div className='modal__menu'>
                <span className='tabs__element'>View profile</span>
                <span className='tabs__element'>Manage subscriptions</span>
                <span className='tabs__element'>View history</span>
              </div>
              <div className='modal__footer'>
                <span className='tabs__element'>Logout</span>
              </div>              
              <span className='profile__placeholder profile__placeholder_modal'>v 1.21.7 - <u>Terms and Conditions</u></span>
            </div>
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
