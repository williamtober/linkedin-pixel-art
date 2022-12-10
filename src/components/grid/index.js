import { useState } from 'react';

const Grid = (props) => {
    const { x, y, doChange } = props;
    const [count, setCount] = useState(0);

    return (
        <div style={style.grid} className="grid">
            {y.map((item, indexY) => {

                return (
                    <div style={style.row} className="row" key={indexY}>
                        {x.map((item, index) => {
                            if(count !== 0) {
                            } else {
                                setCount(count++)}
                            return (
                                // on mouse enter, lets take the e so that we can see if the mouse is clicked when it enters the pixel
                                <div style={style.pixel} id={`pixel-${indexY}_${index}`} className="pixel" key={count} onMouseEnter={(e) => doChange(e,count)}></div>
                            )
                            }
                        )}
                    </div>
                )
            })}
        </div>
    )
}

const style = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    pixel: {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: "white",
    },
    grid: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
}

export default Grid;