const StyledTd = ({children})=>{
    return <td className="border-r-[var(--main-secondary-light)] border-r-2 p-[10px]">{children}</td>
}

const StyledTr = ({children})=>{
    return <tr className="border-b-[var(--main-secondary-light)] border-b-2">{children}</tr>
}

const ListProductTable = ({name, price, quantityOrdered, createdAt, paymentStatus, deliveryStatus})=>{
    return (
        <>
        <table className="border-collaspe">
            <tbody>
                <StyledTr>
                    <StyledTd>Name</StyledTd>
                    <StyledTd>{name}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Quantity</StyledTd>
                    <StyledTd>{quantityOrdered}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Total Price</StyledTd>
                    <StyledTd>{Number(price)*Number(quantityOrdered)}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Date Added</StyledTd>
                    <StyledTd>{createdAt}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Payment Status</StyledTd>
                    <StyledTd>{paymentStatus}</StyledTd>
                </StyledTr>
                <StyledTr>
                    <StyledTd>Delivery Status</StyledTd>
                    <StyledTd>{deliveryStatus}</StyledTd>
                </StyledTr>
            </tbody>
        </table>
        </>
    )
}

export default ListProductTable