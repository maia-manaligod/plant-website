import { useState, useEffect } from "react";
export function addItem(plant){
        let items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            let same = items.find(p => p.id == plant.id && p.size == plant.size)
            if (same) items[items.indexOf(same)].quantity += plant.quantity
            else {items.push(plant)}
        } else {
            items = [plant]
        }
        localStorage.setItem('items', JSON.stringify(items))
}

export function getItems(){
    let items = JSON.parse(localStorage.getItem('items'));
    return items;
}

export function getItemCount(array){
    const initialValue = 0;
    const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    initialValue);

    return sum;
}


export function useCart(){
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('items');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('items', JSON.stringify(cart));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [cart]);

    return [cart, setCart];
}