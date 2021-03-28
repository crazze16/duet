import React from 'react'

export const Wow = () => {
let a: string = 'hello';
let b: number = 19;
let isSomething: boolean | null = true;
let names: Array<string> = ['Vova', 'DaHenca', 'Andrew', 'Lera'];
let sex: 'male' | 'female';

    type  AddressType = {
    city: string
    country: string
    index?: number
}

type MeType = {
    name: string
    readonly age: number
    middle: boolean
    address: AddressType | null
    sayHi: (helloWord: string) => void
}

let me: MeType = {
    name: 'Vova',
    age: 19,
    address: {
        city: 'Zhytomyr',
        country: 'Ukraine'
    },
    middle: false,
    sayHi(helloWord: string) {
        alert('hey')
    }
};

const sum = (a: any, b: any) => a + b;
    return (
        <div>
            TSX
        </div>
    )
};

interface ICSS {
    [key: string]: string
}

const css:ICSS = {
    border: '1px solid black',
    height: '20px',
    width: '15px',
    color: "#ccc"
}