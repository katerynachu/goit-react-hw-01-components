import { StatisticItem } from "../StatisticItem/StatiscticsItem"
export const  StatisticsList = ({title,stats}) =>{
    return (
        <section className="statistics">
              
    <h2 className="title">{title}</h2>
        <ul className="stat-list">
        {stats.map(stat => {
            return (
            
            <li key={stat.id}>
           <StatisticItem label ={stat.label} percentage={stat.percentage} />
           </li>
            )
        })}

</ul>
</section>
    )
}