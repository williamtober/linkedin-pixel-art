// user should be able to change the parameters of the grid from the header component
import { useSelector, useDispatch } from "react-redux";




const Header = () => {
    // get all values from the store
    const settings = useSelector(state => state.setting.x);
    // destruct the values from the store
    const { x, y, color } = settings;
    
    // get the dispatch function
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch the action to change the x value
        // dispatch the action to change the y value
    }

    return(
        <div style={style.header} className="header">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input style={style.input} type="number" name="x" placeholder="x" />
                <input style={style.input} type="number" name="y" placeholder="y" />
                <button style={style.button} type="submit">Submit</button>
            </form>
        </div>
    )

}

const style = {
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "10vh",
        backgroundColor: "black",
    },
    input: {
        width: "100px",
        height: "30px",
        margin: "10px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        borderRadius: "5px",
    },
    button: {
        width: "100px",
        height: "30px",
        margin: "10px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        borderRadius: "5px",
    },
}

export default Header;