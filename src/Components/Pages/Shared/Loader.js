import React from "react";

const Loader = () => {
    return (
        <div className="flex justify-center h-[80vh] items-center">
    <div style={{borderTopColor: "transparent"}}
        className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
</div>
    );
};

export default Loader;
