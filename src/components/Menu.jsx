import { NavLink } from "react-router-dom";


export default function Menu() {
    const active = ({ isActive }) =>
      isActive ? "menu__item menu__item-active" : "menu__item";
  
    return (
      <nav className="menu">
        <NavLink to="/" className={active}>
          Главная
        </NavLink>
        <NavLink to="/drift" className={active}>
          Дрифт-такси
        </NavLink>
        <NavLink to="/timeattack" className={active}>
          Time Attack
        </NavLink>
        <NavLink to="/forza" className={active}>
          Forza Karting
        </NavLink>
      </nav>
    );
  }