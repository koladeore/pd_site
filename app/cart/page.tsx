"use client"
import React from "react";
import Link from "next/link";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineLeft,
    AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { urlFor } from "../lib/sanityImageUrl";


interface CartItem {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    image: string; 
}


const Cart = () => {
    // const cartRef = useRef();
    const {
        totalPrice,
        totalQuantities,
        cartItems,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
    } = useAppContext();
    // const handleCheckout = async () => {
    //     const stripe = await getStripe();

    //     const response = await fetch('/api/stripe', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(cartItems),
    //     });

    //     if (response.statusCode === 500) return;

    //     const data = await response.json();

    //     toast.loading('Redirecting...');

    //     stripe.redirectToCheckout({ sessionId: data.id });
    // }
    return (
        // <div>hi</div>
        <div className="">
            <div className="">
                {/* <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({totalQuantities} items)</span>
                </button> */}
                <span className="">Your Cart</span>
                <span className="">({totalQuantities} items)</span>
                {cartItems.length < 1 && (
                    <div className="">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/books">
                            <button
                                type="button"
                                onClick={() => setShowCart(false)}
                                className=""
                            >
                                Back to books
                            </button>
                        </Link>
                    </div>
                )}

                <div className="">
                    {cartItems.length >= 1 && cartItems.map((item: CartItem) => (
                        <div className="" key={item._id}>
                            {/* <img src={urlFor(item?.image[0])} className="cart-product-image" /> */}
                            <div className="">
                                <Image
                                    src={item.image}
                                    width={500}
                                    height={500}
                                    alt="detailImage"
                                    className=""
                                />
                            </div>
                            <div className="">
                                <div className="">
                                    <h5>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="">
                                    <div>
                                        <p className="">
                                            <span className="" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                                                <AiOutlineMinus />
                                            </span>
                                            <span className="">{item.quantity}</span>
                                            <span className="" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className=""
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="">
                        <div className="">
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="">
                            <button type="button" className="">
                                Pay with PayStack
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
