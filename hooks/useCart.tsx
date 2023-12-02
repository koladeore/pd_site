import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { toast } from "react-hot-toast";
interface Props {
    [PropName: string]: any;
}
export const CartContext = createContext<any | null>(null);

export const CartContextProvider = (props: Props) => {
    // const [qty, setQty] = useState(1);
    const [open, setOpen] = useState(false);
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartTotalAmount, SetCartTotalAmount] = useState(0);
    const [cartProducts, setCartProducts] = useState<any[] | null>(null);
    useEffect(() => {
        const cartItems: any = localStorage.getItem("CartItems");
        const cProducts: any[] | null = JSON.parse(cartItems);
        setCartProducts(cProducts);
    }, []);
    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts?.reduce(
                    (acc, item) => {
                        const itemTotal = item.price * item.quantity;
                        acc.total += itemTotal;
                        acc.qty += item.quantity;
                        return acc;
                    },
                    {
                        total: 0,
                        qty: 0,
                    }
                );
                setCartTotalQty(qty);
                SetCartTotalAmount(total);
            }
        };
        getTotals();
    }, [cartProducts]);
    const handleAddProductToCart = useCallback((product: any) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                const existingProductIndex = prev.findIndex(
                    (item) => item._id === product._id
                );

                if (existingProductIndex !== -1) {
                    // If the product is already in the cart, update its quantity
                    updatedCart = [...prev];
                    ++updatedCart[existingProductIndex].quantity;
                    toast.success("Cart Quantity Increased");
                    localStorage.setItem(
                        "CartItems",
                        JSON.stringify(updatedCart)
                    );
                    return updatedCart;
                } else {
                    return (updatedCart = [...prev, product]);
                }
            } else {
                updatedCart = [product];
            }
            toast.success("Product Added to Cart");
            localStorage.setItem("CartItems", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);
    const handleRemoveProductFromCart = useCallback(
        (product: any) => {
            if (cartProducts) {
                const filteredProducts = cartProducts.filter((item: any) => {
                    return product._id !== item._id;
                });
                console.log("filvrer valut", filteredProducts);
                if (filteredProducts.length === 0) {
                    setCartProducts(null);
                    localStorage.setItem("CartItems", JSON.stringify(null));
                } else {
                    setCartProducts(filteredProducts);
                    localStorage.setItem(
                        "CartItems",
                        JSON.stringify(filteredProducts)
                    );

                    toast.success("Product Removed");
                    console.log("this is filter", filteredProducts);
                }
            }
        },
        [cartProducts]
    );
    const handleCartQtyIncrease = useCallback(
        (product: any) => {
            let updatedCart;
            if (product.quantity === 99) {
                return toast.error("Ooops! Maximum reached");
            }
            if (cartProducts) {
                updatedCart = [...cartProducts];
                const existingIndex = cartProducts.findIndex(
                    (item) => item._id === product._id
                );
                if (existingIndex > -1) {
                    updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
                        .quantity;
                }
                setCartProducts(updatedCart);
                localStorage.setItem("CartItems", JSON.stringify(updatedCart));
            }
        },
        [cartProducts]
    );
    const handleCartQtyDecrease = useCallback(
        (product: any) => {
            let updatedCart;
            if (product.quantity === 1) {
                return toast.error("Ooops! Minimum reached");
            }
            if (cartProducts) {
                updatedCart = [...cartProducts];
                const existingIndex = cartProducts.findIndex(
                    (item) => item._id === product._id
                );
                if (existingIndex > -1) {
                    updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
                        .quantity;
                }
                setCartProducts(updatedCart);
                localStorage.setItem("CartItems", JSON.stringify(updatedCart));
            }
        },
        [cartProducts]
    );

    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem("CartItems", JSON.stringify(null));
    }, []);
    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
        open,
        setOpen,
    };
    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
};
