import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItemList = ({ menuId }) => {
  const menus = useSelector((state) => state.menu.menus);
  const items = useSelector((state) => state.menuItem.items.filter((item) => item.menuId === menuId));

  const selectedMenu = useSelector((state) => state.menu.selectedMenu);

  const imageUrl = 'https://res.cloudinary.com/dfm6raue1/image/upload/v1743004351/BACKGROUND_IMAGE_vhqf6e.png';

  return (
    <section className="relative h-[672px]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col items-center h-[416px] w-[1140px] border sm:px-6 text-white">
            <div className="p-20">
              <h1 className="text-5xl font-bold">BRUNCH COCKTAILS</h1>
            </div>
            <div>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item.itemName} - ${item.price}</li>
                ))}
                <li>cakes</li>
              </ul>
            </div>
            <Link
              to="/add-menu-item"
              className="z-10 inline-block cursor-pointer mt-8 px-3 py-2 bg-blue-400 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              Add a New Item
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuItemList;