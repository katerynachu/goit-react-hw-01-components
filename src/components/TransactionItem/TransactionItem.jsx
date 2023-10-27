import css from './TransactionItem.module.css'
export const TransactionItem = ({type,amount,currency}) =>{
    return (
    <tr>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>

    )
}