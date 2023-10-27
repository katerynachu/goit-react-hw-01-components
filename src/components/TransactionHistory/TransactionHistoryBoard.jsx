import { TransactionItem } from "components/TransactionItem/TransactionItem"
import css from "./TransactionHistoryBoard.module.css"
export const TransactionHistoryBoard = ({ items }) => {
  return (
    <table className={css.history}>
<thead className={css.head}>
        <tr className={css.header}>
          <th className={css.category}>Type</th>
          <th className={css.category}>Amount</th>
          <th className={css.category}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody  className={css.area} key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </tbody>
        )
      })}
    </table>
  )
}
