const CommentsSidebar = ({reviews})=>{
    return (
        <>
        <aside className="px-2 py-3 bg-[var(--text-secondary-light)] rounded-md w-full">
            <h2 className="text-2xl text-[var(--text-primary)] font-bold">
                Comments
            </h2>
           {reviews?.length > 0 && <ul className="flex flex-col gap-3">
                {reviews.map(({userInfo: {name}, textFeedback, ratings})=>{
                    <li className="flex flex-col gap-2 items-start">
                        <p className="text-base text-[var(--text-primary)] font-semibold">{name}</p>
                        <p className="text-lg">
                            {Array(ratings)
                            .fill(0)
                            .map(() => (
                                <FaStar />
                            ))}
                        </p>
                        <p className="text-base text-[var(--main-secondary)] font-semibold">{textFeedback}</p>
                    </li>
                })}
            </ul>}
        </aside>
        </>
    )
}

export default CommentsSidebar