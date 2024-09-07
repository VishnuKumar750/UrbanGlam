
import { CiHeart,CiShoppingCart  } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const Productcard = ( { product } ) => {
    return (
        <div className="w-[18rem] h-[18rem] lg:w-[15rem] my-4  mb-8">
            <Link to={"/ProductDetail"}>
                <div className="w-full h-full bg-gray-300 rounded-xl bg-center bg-contain bg-no-repeat "
                    style={{ backgroundImage:`url(${product.image})`}}
                >
                    <div className="flex items-start justify-between px-2 py-2 z-[99]">
                        <div className="flex items-center justify-center rounded-full bg-white w-14"><FaStar className="text-pink-600" /> {product.rating}</div>
                        <div>
                            <div className="rounded-full bg-white p-2"><CiHeart /></div>
                            <div className="rounded-full bg-white p-2 my-2"><CiShoppingCart /></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-2 z-[99]">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="font-semibold">{product.price}</p>
                </div>
            </Link>

        </div>
    )
}

Productcard.propTypes = {
    product: PropTypes.object.isRequired
}