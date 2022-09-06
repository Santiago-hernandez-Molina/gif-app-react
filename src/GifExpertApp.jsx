import { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['javascript']);

    const addCategory = (newCategory) => {

        if (!categories.includes(newCategory)) {
            setCategories((cat) => [ newCategory,...cat ]);
        }
    }

    return (

        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={(value) => addCategory(value)}
            />

            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category} />
            ))}
        </>
    );
}