import Thumbnail from '../img/book-and-apple.png'
import User from '../img/user.png'

const Card = () => {
    return (
        <div className="mx-auto bg-white w-full rounded-xl overflow-hidden"
            style={{ boxShadow: "0px 4px 19px rgba(39, 21, 62, 0.16)" }}>
            <div className="w-full overflow-hidden">
                <img src={Thumbnail} alt="Apple and Book" className="hover:scale-110 transition-transform duration-300 w-full min-h-100" />
            </div>
            <div className="px-[16px] py-[25px]">
                <div>
                    <h5 className="font-bold text-2xl text-primary mb-[8px]">Bahasa Indonesia</h5>
                    <p className="text-gray-400">Kelas | Sekolah Dasar</p>
                </div>
                <div className="flex gap-2 items-center mt-[30px]">
                    <div>
                        <img src={User} alt="User" />
                    </div>
                    <div>
                        <h6 className="text-primary text-xl font-semibold mb-[2px]">Cici Sang Putri</h6>
                        <p className="text-gray-400 text-md">Guru SDN 01 Pekanbaru</p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-[38px]">
                    <div className="text-xl text-primary">Rp.90.000</div>
                    <div>
                        <button className="border-2 rounded-xl text-sm font-bold text-blue-900 px-[16px] py-[8px] border-blue-900 hover:bg-[#003592] transition-all duration-300 hover:text-white">Lihat Kelas</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
