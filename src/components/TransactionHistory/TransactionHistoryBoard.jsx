import { TransactionItem } from "components/TransactionItem/TransactionItem"

export const TransactionHistoryBoard = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </tbody>
        )
      })}
    </table>
  )
}
