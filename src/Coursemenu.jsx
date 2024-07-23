import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const Menubar = () => {
    const [statecourse, setstatecourse] = useState("All")
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <Link to="/">
                    <button type="button" style={{ backgroundColor: statecourse === "All" ? "blue" : "blueviolet", color: "white", margin: 15, border: 0, borderRadius: 10, fontSize: 20 }}
                        onClick={() => setstatecourse("All")}>All</button>
                </Link>
                <Link to="/fsd">
                    <button type="button" style={{ backgroundColor: statecourse === "FSD" ? "blue" : "blueviolet", color: "white", margin: 15, border: 0, borderRadius: 10, fontSize: 20 }}
                        onClick={() => setstatecourse("FSD")}>Full Stack Development</button>
                </Link>
                <Link to={"/ds"}>
                    <button type="button" style={{ backgroundColor: statecourse === "DS" ? "blue" : "blueviolet", color: "white", margin: 15, border: 0, borderRadius: 10, fontSize: 20 }}
                        onClick={() => setstatecourse("DS")}>Data Science</button>
                </Link>
                <Link to="/cs">
                    <button type="button" style={{ backgroundColor: statecourse === "CS" ? "blue" : "blueviolet", color: "white", margin: 15, border: 0, borderRadius: 10, fontSize: 20 }}
                        onClick={() => setstatecourse("CS")}>Cyber Security</button>
                </Link>
                <Link to="/carrear">
                    <button type="button" style={{ backgroundColor: statecourse === "carrear" ? "blue" : "blueviolet", color: "white", margin: 15, border: 0, borderRadius: 10, fontSize: 20 }}
                        onClick={() => setstatecourse("carrear")}>Carrear</button>
                </Link>
            </div>
            <Outlet />
        </>
    )
}
export default Menubar;