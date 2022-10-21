import { stats } from './StatsData'

function HomeStats() {
  return (
    <section className="flex flex-col md:flex-row w-full justify-center px-4 gap-8 md:gap-48">
        {stats.map(({title, value}) => (
            <div key={title} className="text-white flex flex-row items-center gap-4">
                <h4 className="font-poppins font-semibold text-4xl">{value}</h4>
                <p className="bg-gradient-radial from-[#def9fa] via-[#bef3f5] via-[#9dedf0] via-[#7de7eb] via-[#5ce1e6] to-[#33bbcf] bg-clip-text text-transparent uppercase">{title}</p>
            </div>
        ))}
    </section>
  )
}

export default HomeStats