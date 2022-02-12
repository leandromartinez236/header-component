import './MenuItems.css';

const MenuItems=({items})=>{
  return (
    <div className="links">
      {items.map(item=> <p>{item}</p>)}
    </div>
  );
};
export default MenuItems;