import React from "react";
interface CustomButtonProps {
    text: string;
    myClass?: string;
    onClick?: () => void;
}

const CommonButton: React.FC<CustomButtonProps> = ({ text, myClass = "" }) => {
    return (
        <button
            className={`font-semibold whitespace-nowrap rounded-[72px] border border-sky text-sky-blue hover:bg-sky-blue hover:text-black transition-all duration-700 ease-in-out text-base ${myClass}
`}> {text}</button>
    );
};
export default CommonButton;