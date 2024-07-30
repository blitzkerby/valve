import { useState } from "react"

export default function Form() {
    const [description, setDescription] = useState("Test")


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip? ✨</h3>

            <select>
                { Array.from({length:20}, (_, i) => i + 1).map(
                    (num) => (
                        <option value={num} key={num}>{num}</option>
                    )
                )}
            </select>

            <input 
                    type="text" 
                    placeholder="Item..." 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            <button>Add</button>
        </form>
    );
}