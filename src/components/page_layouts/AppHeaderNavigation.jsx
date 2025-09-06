import { useSelector } from "react-redux"

const AppHeaderNavigation = ()=>{
    const {currentSize} = useSelector((state)=>state.screenSize)
    return (
        <>
        {console.log(currentSize)}
        </>
    )
}

export default AppHeaderNavigation