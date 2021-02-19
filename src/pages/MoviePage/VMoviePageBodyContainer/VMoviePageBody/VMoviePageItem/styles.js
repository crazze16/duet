import styled from 'styled-components'

export const VMovieItemSC = styled.div`
    height: 480px;
    flex: 1 20%;
    border: 1px solid black;
    margin: 10px 10px 60px 10px;
    justify-content: flex-start;
    position: relative;
}
`;
export const VTitleSC = styled.div`
    position: absolute;
   
`;

// background-image: url('https://image.tmdb.org/t/p/w300/${props => props.poster}');
// background-repeat:  no-repeat;
// background-size: contain;

let users = [
    { id: 1, name: "John", age: "20", department: "HR" },
    { id: 2, name: "Sasha", age: "30", department: "Marketing" },
    { id: 3, name: "Bill", age: "40", department: "Finance" },
    { id: 4, name: "Ashley", age: "20", department: "IT" },
    { id: 5, name: "Rachel", age: "40", department: "IT" },
    { id: 6, name: "Tom", age: "30", department: "HR" },
    { id: 7, name: "Steve", age: "30", department: "Marketing" },
    { id: 8, name: "Jim", age: "40", department: "IT" },
    { id: 9, name: "Willy", age: "20", department: "Finance" },
];

const products = [
    { id: 1, title: "Panasonic", price: 50 },
    { id: 2, title: "Samsung", price: 34 },
    { id: 3, title: "Grundic", price: 40 },
    { id: 4, title: "Electrolux", price: 34 },
    { id: 4, title: "Samsung", price: 50 },
    { id: 4, title: "Panasonic", price: 40 },
];

/*  Business logics */
const pipe = (...fns) => x =>fns.reduce((v,f)=>f(v),x);
const curry =(fn)=>{
    return (...args)=>{
        return fn.bind(null,...args);
    }
}

const getProp =
    curry((prop,arr)=>
    {
        return arr.map((item)=>item[prop])
    });


const groupedItems = curry((arr) =>{
    let grouped= arr.reduce((total, currentValue) => {
        if (total.indexOf(currentValue) == -1) {
            total.push(currentValue);
        }
        return total;
    }, []);
    return grouped;
});
const sortBy = curry((arr) => {
    if(typeof arr[0]==='number')
    {
        arr.sort();
    }
    else if(typeof arr[0]==='string')
    {
        arr.sort(function (a,b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        })
    }
    return arr;
});

const getOpts = curry(

    function(arr) {
        {
            return arr.map((str)=>{return <option>${str}</option>})
        }
    }
);

/* =========== client code ===============  */
const usersSelect = document.getElementById("users-select");
const productsSelect = document.getElementById("products-select");

//  Usage:
// getProps может принимать department, age, name, price, title

const userFn = pipe(getProp("department"), groupedItems, sortBy, getOpts);
const productFn = pipe(getProp("price"), groupedItems, sortBy, getOpts);

const usersOpts = userFn(users);
const productsOpts = productFn(products);

usersSelect.innerHTML = usersOpts.join('');
productsSelect.innerHTML = productsOpts.join('');