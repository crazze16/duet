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

function inferLiteralFromString<T extends string>(arg: T): T {
    return arg
}
const a = inferLiteralFromString<string>('some string');
const b = inferLiteralFromString<'some string'>('some string');
// const c = returnTheSame<number>(42);
//Запись выше означает, что мы подаем на вход аргумент строкового типа Т, и функция вернет нам ровно тот же самый тип Т.

function inferLiteral<U, T extends U>(arg: T): T {
    return arg
}
function inferStringLiteral<T extends string>(arg: T): T {
    return inferLiteral<string, T>(arg)
}

//Generics

type ServerResponseType<T> = {
    errorCode: number
    messages: Array<string>
    data: T
}

type Data = {
    name: string
    surname: string
}

const response: ServerResponseType<Data> = {
    errorCode: 1,
    messages: ['no','yes'],
        data: {
            name: 'Vova',
            surname: 'Nekoz'
        }
}


type SomeType<T> = T extends {[key: string]: infer U} ? U : never
