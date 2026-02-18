import { useState } from "react"

const Inventory = () => {
    const [inv, setInv] = useState<string[]>([])

    return (
        <section className='w-[60%] h-full bg-slate-300 p-8 flex flex-col items-start'>
            <div className="flex justify-between w-full items-center">
                <h1 className="font-bold text-2xl my-8">Inventory</h1>
                <button onClick={() => { setInv([...inv, 'hey']) }} className="border-black hover:bg-blue-600 bg-blue-500 py-2 px-4 w-fit h-8 flex items-center text-white rounded-md border">Add item</button>
            </div>
            <div className="border bg-slate-50 rounded-2xl p-4 w-full h-full">
                <label htmlFor="item-add-button" className="my-2">
                    Add a new item:
                </label>
                <div className="flex justify-between w-60 items-center h-8 gap-2">
                    <input id="item-add-button" type="text" className="border bg-white rounded-sm h-full w-full p-1"></input>
                    <button onClick={() => { setInv([...inv, 'hey']) }} className="border-black hover:bg-blue-600 bg-blue-500 py-2 px-4 w-fit h-8 flex items-center text-white rounded-md border">Add</button>
                </div>
                <div id="item-grid" className="flex w-full gap-2">
                    {inv.map((i) => (<div className="w-10 h-10 bg-blue-200" key={i}>{i}</div>))}
                </div>
            </div>

        </section>
    )
}

export default Inventory