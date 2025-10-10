import AccountNavigation from "./account-navigation"

export const metadata = {
	title: "Lasu Mart-Account"
}

export const accountHeadersStyles = "font-bold text-3xl text-[var(--text-primary)] text-center mb-1"

const UserAccountPageLayout = ({children})=>{
    return (
        <>
        <div className={"flex flex-col gap-3 w-screen md:grid md:grid-cols-[25%_75%]"}>
            <AccountNavigation />
            <main className="py-3 px-5 w-full">
                {children}
            </main>
        </div>
        </>
    )
}

export default UserAccountPageLayout