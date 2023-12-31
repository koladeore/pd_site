"use client";
declare const window: {
    Email: any;
} & Window;
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const PayStack = () => {
    const { cartTotalAmount, handleClearCart } = useCart();
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as string;
    const amount = cartTotalAmount * 100
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const router = useRouter();
    const componentProps = {
        email,
        amount,
        metadata: {
            custom_fields: [
                {
                    display_name: "Name",
                    variable_name: "name",
                    value: name,
                },
                {
                    display_name: "Phone",
                    variable_name: "phone",
                    value: phone,
                },
                {
                    display_name: "Address",
                    variable_name: "Address",
                    value: address,
                },
            ],
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>{
            router.push("/cart");
            handleClearCart();
            toast.success("Payment received");
        },
    };

    return (
        <div className="flex items-center justify-center mb-4 mt-4 ">
            <div className="flex items-center justify-center w-[500px]  h-[500px]">
                <div className="bg-white-500 p-4 md:p-8 rounded-lg shadow-2xl">
                    <p className="flex items-center justify-center">Total: ₦{cartTotalAmount}</p>
                    <p className="flex items-center justify-center text-sm text-gray-400">It is require to fill the form</p>
                    <form className="w-full">
                        <div className="mb-4 mt-4">
                            <label
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                            >
                                Phone
                            </label>
                            <input
                                required
                                type="text"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="address"
                            >
                                Address
                            </label>
                            <input
                                required
                                type="text"
                                id="address"
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </form>
                    <PaystackButton
                        {...componentProps}
                        className="mt-2 cursor-pointer text-center text-xs uppercase bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                    />
                </div>
            </div>
        </div>
    );
}

export default PayStack