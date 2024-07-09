import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, subtitle, image }) => {
    return (
        <div
            className="relative w-60 h-72 rounded-lg overflow-hidden shadow-lg"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0  bg-black bg-opacity-20 flex flex-col justify-start p-4 hover:bg-transparent transition-all duration-200 cursor-pointer">
                <h2 className="text-white text-xl font-semibold">{title}</h2>
                <p className="text-white text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;
