import fsddata from "./FSD.json"
import csdata from "./CS.json"
import dsdata from "./DS.json"
import Coursecard from "./coursecard"
import carrear from "./carrear.json"
const Fsdcourse = () => {
    return (
        <>
            {fsddata.map((f) => (
                <Coursecard
                    key={f.No}
                    {...f}
                />
            ))}
        </>
    )
}
const Cscourse = () => {
    return (
        <>
            {csdata.map((f) => (
                <Coursecard
                    key={f.No}
                    {...f}
                />
            ))}
        </>
    )
}
const Dscourse = () => {
    return (
        <>
            {dsdata.map((f) => (
                <Coursecard
                    key={f.No}
                    {...f}
                />
            ))}
        </>
    )
}
const Carrear = () => {
    return (
        <>
            {carrear.map((f) => (
                <Coursecard
                    key={f.No}
                    {...f}
                />
            ))}
        </>
    )
}
export default Fsdcourse;
export { Cscourse, Dscourse, Carrear }