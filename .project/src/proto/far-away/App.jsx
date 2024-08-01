import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"
import { useState } from "react"

export default function App() {
    const [items, setItems] = useState([])

    function handleAddItems(item){
        setItems((items) => [...items, item])
    }

    function handleDeleteItem(id){
        setItems((items) => items.filter(item => item.id !== id))
    }

    return <>
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem}/>
            <Stats />
        </div>
    </>
}
