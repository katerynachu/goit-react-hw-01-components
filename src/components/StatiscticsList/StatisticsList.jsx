import { StatisticItem } from "../StatisticItem/StatiscticsItem"
import css from "./StatisticsList.module.css"
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

export const  StatisticsList = ({title,stats}) =>{
    return (
        <section className={css.statistics}>
              
    <h2 className={css.title}>{title}</h2>
        <ul className={css.stat_list}>
        {stats.map(stat => {
            return (
            
            <li className={css.stat_item} key={stat.id}  style={{ backgroundColor: stat.backgroundColor || getRandomHexColor() }}
            >
           <StatisticItem label ={stat.label} percentage={stat.percentage} />
           </li>
            )
        })}

</ul>
</section>
    )
}