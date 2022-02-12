import img from '../../assets/images/logo-fares.svg';
import Imagen from './Imagen';
import MenuItems from './MenuItems'

import './Header.css'

const Header=()=>{
  const menus = ['Home', 'About As', 'Contact Us']

  return (
    <div className="bg-header">
      <div className="header-container">
        <Imagen img={img} type='logo' alt='Fares'/>
        <MenuItems items={menus} />
      </div>
    </div>
  );
};
export default Header;