import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const ProductFilter = () => {
    const [openCategories, setOpenCategories] = useState({
        ManFashion: true,
        FemaleFashion: true,
        Price: true,
        Color: true,
        Size: true,
    });

    const toggleCategory = (category) => {
        setOpenCategories((prevCategories) => ({
            ...prevCategories,
            [category]: !prevCategories[category],
        }));
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h1 className="font-bold text-lg mb-4">Filter Products</h1>
            {/* Man Fashion */}
            <div className="border-b">
                <button className="flex justify-between w-full py-3 text-left" onClick={() => toggleCategory("ManFashion")}>
                    <span>Men Fashion</span>
                    <span>{openCategories.ManFashion ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                </button>
                {openCategories.ManFashion && (
                    <div className="pl-4 pb-4">
                        <label className="block">
                            <input type="checkbox" className="mr-2" />
                            Small
                        </label>
                        <label className="block">
                            <input type="checkbox" className="mr-2" />
                            Medium
                        </label>
                        <label className="block">
                            <input type="checkbox" className="mr-2" />
                            Large
                        </label>
                    </div>
                )}
            </div>

            {/* Other categories follow the same structure */}
            {/* Add Female Fashion, Price, Color, and Size here */}
        </div>
    );
};
