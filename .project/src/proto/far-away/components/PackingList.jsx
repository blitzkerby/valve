const initialItems = [
    {id:1,
        description: "Passports",
        quantity: 2,
        packed: true
    },
    {id:2,
        description: "Travel documents",
        quantity: 1,
        packed: false
    },
    {id:3,
        description: "Credit cards",
        quantity: 3,
        packed: false
    }
]

function Item({item}){
    return <li key={item.id}>
        <input type="checkbox" value={item.packed} readOnly />
        <span style={item.packed? {textDecoration: "line-through"} : {}}>
            {item.quantity} {item.description}
        </span>
    </li>
}



export default function PackingList() {
    return <ul className="list">
        { initialItems.map(item => {
                return <Item item={item}/>
            }) 
        }
    </ul>
}