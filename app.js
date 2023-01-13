var tableItems=[
    {
        id:1,
        tablename:"Table-1",
        items: new Map(),
        price:0
    },
    {
        id:2,
        tablename:"Table-2",
        items: new Map(),
        price:0
    },
    {
        id:3,
        tablename:"Table-3",
        items: new Map(),
        price:0
    },
    {
        id:4,
        tablename:"Table-4",
        items: new Map(),
        price:0
    }
];


var menuItems=[
    {
        id:1,
        name:"Country Fries",
        type:"starters",
        price:149.00
    },
    {
        id:2,
        name:"Garlic Focaccia",
        type:"starters",
        price:  199.00
    },
    {
        id:3,
        name:"French Fries",
        type:"starters",
        price:99.00
    },
    {
        id:4,
        name:"Veg Biryani",
        type:"Main Course",
        price:199.00
    },
    {
        id:5,
        name:"Chicken biryani",
        type:"Main Course",
        price:299.00,
    },
    {
        id:6,
        name:"Curd Rice",
        type:"Main Course",
        price:100.00
    },
    {
        id:7,
        name:"Apple Pie",
        type:"dessert",
        price:149.00
    },
    {
        id:8,
        name:"Ice Cream",
        type:"Desset",
        price:99.00
    },
    {
        id:9,
        name:"Cake",
        type:"Dessert",
        price:75
    }
];


document.addEventListener('DOMContentLoaded', ()=>{
    const table=document.querySelector(".table-items");
    for(let i=0;i<tableItems.length;i++)
    {
        table.innerHTML+= `<div class="card" id="tableItems${tableItems[i].id}" onclick="openPopup(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ondragenter="funEnter(event)" ondragleave="funLeave(event)" pos="${tableItems[i].id}">
        <h5>${tableItems[i].tablename}</h5>
        <br>
        <br>
        <p item="${tableItems[i].items.size}" price="${tableItems[i].price}">items: ${tableItems[i].items.size} | price:${tableItems[i].price}</p>
        </div>`;
    }
    const pop=document.querySelector(".popup");
    for(let i=0;i<tableItems.length;i++)
    {

    }
    const mainCourse=document.querySelector(".main-course");
    for(let i=0;i<menuItems.length;i++)
    {
        mainCourse.innerHTML+= `<div class="card1" id="menus${menuItems[i].id}" draggable="true" ondragstart="drag(event)"> 
        <h5>${menuItems[i].name}</h5>
        <p> ${menuItems[i].price}</p>
        <p>${menuItems[i].type} </p>
        </div>`;
    }
})

function menuFilter() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const list= document.querySelectorAll(".card1");
    console.log(list);
    for (let i = 0; i <list.length; i++) {
        const name= list[i].firstElementChild.innerHTML.toUpperCase();
        const type=list[i].lastElementChild.innerHTML.toUpperCase();
        if (name.indexOf(input) > -1 || type.indexOf(input) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
    
}
function tableFilter() {
    const input=document.getElementById("tableInput").value.toUpperCase();
    const list= document.querySelectorAll(".card");
    console.log(list);
    for (let i = 0; i <list.length; i++) {
        const name= list[i].firstElementChild.innerHTML.toUpperCase();
        if (name.indexOf(input) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}
let present_cost,items,cost,drag_item;


function allowDrop(event)
{
    event.preventDefault();
    console.log("droagover");
}


function funEnter(event)
{
    event.preventDefault();
    console.log("dropEnter");
}


function funLeave(event){
    event.preventDefault();
    console.log("dragLeave");
}


function drag(event)
{
    const a=document.getElementById(event.target.id).children[1].innerHTML;
    drag_item=document.getElementById(event.target.id).firstElementChild.innerHTML;
    console.log(drag_item);
    present_cost=+a;
}


function allowDrop(event)
{
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}


function drop(event)
{
    console.log(event.target.id);
    items=+(document.getElementById(event.currentTarget.id).children[3].getAttribute("item"));
    cost=+(document.getElementById(event.currentTarget.id).children[3].getAttribute("price"));
    let id1=+(document.getElementById(event.currentTarget.id).getAttribute("pos"));
    console.log(id1);
    if(tableItems[id1-1].items.has(drag_item))
    {
        tableItems[id1-1].items.set(drag_item,+(tableItems[id1-1].items.get(drag_item))+1);
        cost+=present_cost;
    }
    else
    {
        tableItems[id1-1].items.set(drag_item,1);
        console.log(tableItems[id1-1].items);
        items+=1;
        cost+=present_cost;
    }
    document.getElementById(event.currentTarget.id).children[3].innerHTML=`items:${items} | price: ${cost}`;
    document.getElementById(event.currentTarget.id).children[3].setAttribute('item',items);
    document.getElementById(event.currentTarget.id).children[3].setAttribute('price',cost);
}


// let row=document.querySelector("#popTable");
let popup=document.getElementById("popup");
console.log(popup);
const popUp= document.querySelector("popup");
let price,total_cost=0;
let row=document.querySelector("#tbody");
let tot=document.querySelector("#tfoot");
function openPopup(event)
{
    popup.classList.add("open-popup");
    let id2=+(document.getElementById(event.currentTarget.id).getAttribute("pos"));
    let i=1;
    let value1='';
    console.log(tableItems[id2-1].items);
    total_cost=0;
    for(let [key, value] of tableItems[id2-1].items )
    {
        price= Price(key,value);
        total_cost+=price;
         value1+=`<tr >
         <td class="bill" >${i}</td>
         <td class="bill" >${key}</td>
         <td class="bill" ><input type="number" id="qty${i}" min = "1" value="${value}" oninput="changeQty('${i}','${key}','${id2}')"/></td>
         <td class="bill" >${price}</td>
         <td class="bill" ><i class='fa fa-trash' id="delete${i}" onclick="deleteItem('${i}','${price}',${id2},'${key}')"></i></td>
         </tr>`;
          console.log(i);
        i++;
    }
    // value1+=`<p>total=${id2.getAttribute('price')}</p>`;
    row.innerHTML=value1;
    console.log(row.nextElementSibling);
    row.nextElementSibling.innerHTML=`<p>Total:${total_cost}</p>`;
    console.log( row.parentElement.nextElementSibling);
    row.parentElement.nextElementSibling.innerHTML=`<button id="pay" onclick="Delete('${total_cost}',${id2})">Pay</button>`
}
function Price(key, value)
{
    let price=0;
    console.log(menuItems.length);
    for(let i=0;i<menuItems.length;i++)
    {
        console.log(key);
        if(menuItems[i].name === key)
        {
            price=(+value)*(+menuItems[i].price);
            console.log(price);
            break;
        }
    }
    console.log(price);
    return price;
}
function changeQty(id,key,id2)
{
    let final_cost=0;
    const q = document.getElementById(`qty${id}`);
    price=Price(key,q.value);
    q.parentElement.nextElementSibling.innerHTML=`${price}`;
    console.log(row.children[0].lastElementChild.innerHTML);
    tableItems[id2-1].items.set(key,q.value);
    for(let i=0;i<tableItems[id2-1].items.size;i++)
    {
        console.log(row.children[i].children[3].innerHTML);
        final_cost+=+(row.children[i].children[3].innerHTML);
    }
    document.getElementById(`tableItems${id2}`).children[3].innerHTML=`items:${items} | price: ${final_cost}`;
    document.getElementById(`tableItems${id2}`).children[3].setAttribute('price',final_cost);
    document.getElementById(`tableItems${id2}`).children[3].setAttribute('item',q.value);
    total_cost=final_cost;
    row.nextElementSibling.innerHTML=`<p>total:${total_cost}</p>`;
}
function closePopup()
{
    popup.classList.remove("open-popup");
}

function Delete(cost, id2)
{
    alert(`The total amount paid is: ${total_cost}`);
    total_cost=0;
    tableItems[id2-1].items.clear();
    document.getElementById(`tableItems${id2}`).children[3].innerHTML=`items:${0} | price: ${total_cost}`;
    document.getElementById(`tableItems${id2}`).children[3].setAttribute('price',0);
    document.getElementById(`tableItems${id2}`).children[3].setAttribute('item',0);
    popup.classList.remove("open-popup");
}

function deleteItem(id,price1,id2,key)
{
    let final_cost=+(document.getElementById(`tableItems${id2}`).children[3].getAttribute('price'));
    const d= document.getElementById(`delete${id}`);
    let qt=0;
    for(let i=0;i<tableItems[id2-1].items.size;i++)
    {
        if(tableItems[id2-1].items.has(key)==true)
        {
            qt=+(tableItems[id2-1].items.get(key));
            tableItems[id2-1].items.delete(key);
            break;
        }
    }
    console.log(qt);
    final_cost-=(+price1)*(+qt);
    console.log(final_cost);
    document.getElementById(`tableItems${id2}`).children[3].innerHTML=`items:${tableItems[id2-1].items.size} | price: ${final_cost}`;
    document.getElementById(`tableItems${id2}`).children[3].setAttribute('price',final_cost);
    document.getElementById(`tableItems${id2}`).children[3].setAttribute('item',tableItems[id2-1].items.size);
    row.nextElementSibling.innerHTML=`<p>Total:${final_cost}</p>`;
    total_cost=final_cost;
    d.parentElement.parentElement.remove();

} 