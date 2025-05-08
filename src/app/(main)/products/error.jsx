"use client";

function error(params) {
    return <div>{params.error.message}</div>;
}

export default error;