import React from 'react'
import { useDispatch } from 'react-redux';
import { setMenu } from '../redux/menuSlice';

function MenuPageNav() {

    const dispatch = useDispatch();

    const imageUrl2 = 'https://res.cloudinary.com/dfm6raue1/image/upload/v1743000964/deepnetbackground_musvij.png';

    const handleMenuClick = (menuName) => {
        dispatch(setMenu(menuName));
    };

    return (
        <>
            <section>
                <div
                    className="relative h-[79px] bg-cover bg-center bg-repeat-x"
                    style={{
                        backgroundImage: `url('${imageUrl2}')`,
                        backgroundSize: 'auto 100%' // Ensures full height while repeating width
                    }}
                >
                    <nav className=" text-white flex justify-center items-center h-20">
                        <ul className="flex justify-center items-center space-x-6 ">
                            {["FOOD", "DRINKS", "BRUNCH"].map((menu) => (
                                <li key={menu}>
                                    <button
                                        onClick={() => handleMenuClick(menu)}
                                        className="bg-black w-24 hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-300 hover:border-transparent rounded"
                                    >
                                        {menu}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </section>
            {/* <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/90 to-transparent"></div> */}
        </>
    )
}

export default MenuPageNav