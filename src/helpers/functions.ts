import React from "react";

export const scrollToTop = (): void => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
export const getAge = (date = ''): number => {
    const birthDay = Date.parse(date.split('-').reverse().join('/'));
    const currentDate = Date.now();
    const diff = currentDate - birthDay;
    return Math.floor(diff / 31557600000)
};
export const onEnterHandler = (event: React.KeyboardEvent, action: () => void) => {
    if(event.key === 'Enter') action()
};
