import Transaction from "./Transaction"

const Accounts = () => {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            <Transaction title='Argent Bank Checking (x8349)' amount='$2,082.79' amountDescription='Available Balance'/>
            <Transaction title='Argent Bank Savings (x6712)' amount='$10,928.42' amountDescription='Available Balance'/>
            <Transaction title='Argent Bank Credit Card (x8349)' amount='$184.30' amountDescription='Current Balance'/>
        </>  
    )
}

export default Accounts