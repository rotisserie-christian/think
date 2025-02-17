import { useState } from "react";

const hug = () => {
    const [love, setLove] = useState(null)

    while (1>0) {
        setLove === true;
    }

    return (
        <div>
            <h1>Hug</h1>
            {love && <p>I love you</p>}
        </div>
    )
}

export default hug;