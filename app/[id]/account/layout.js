import AccountNavigation from "./account-navigation"


const UserAccountPageLayout = ({children})=>{
    return (
        <>
        <div className={"flex flex-col gap-3 w-screen md:grid md:grid-cols-[25%_75%]"}>
            <AccountNavigation />
            {children}
        </div>
        </>
    )
}

export default UserAccountPageLayout