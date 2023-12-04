"use client"
import { CartContextProvider } from "@/hooks/useCart";
interface AppProviderProps{
    children: React.ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return <CartContextProvider>{children}</CartContextProvider>;
};

export default AppProvider;
