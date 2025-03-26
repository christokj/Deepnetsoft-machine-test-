import MenuItemList from "../../components/MenuItemList";
import MenuPageHeader from "../../components/MenuPageHeader";
import MenuPageNav from "../../components/MenuPageNav";

const MenuPage = () => {

    return (
        <div>
            <MenuPageHeader />
            <div>
                <MenuPageNav />
            </div>
            <div>
                <MenuItemList />
            </div>
        </div>
    );
};

export default MenuPage;
