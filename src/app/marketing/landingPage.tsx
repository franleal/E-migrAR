import Image from "next/image";
import Plans from "@/components/plans";

export default function LandingPage(){
    return(
        <main>
            <div>
                <div className="w-full h-150 flex flex-wrap justify-center p-20">
                    <p className="w-100 mr-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.  
                    </p>
                   
                    <Image
                        alt="Main-Image"
                        src={"/images/slider/img6.jpg"}
                        width={700}
                        height={700}
                        className="object-cover object-center rounded-xl"
                    />                 
                </div>
                <div className="w-full h-120">
                    <h4 className="text-5xl">Lo que hacemos</h4>
                    <ul className="text-2xl">
                        <li className="mt-5" id="li1">-Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum dolores quod necessitatibus ut maiores velit, repellat sint quibusdam nulla quam ducimus consequuntur, sunt nostrum obcaecati, delectus quaerat sapiente illum.</li>
                        <li className="mt-5" id="li2">-Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia iusto amet eius numquam! Blanditiis nobis sed, facilis a hic sapiente recusandae officiis! Similique aspernatur dolores atque labore sunt vitae eaque.</li>
                        <li className="mt-5" id="li3">-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cumque et, doloribus ad non accusantium praesentium eveniet nostrum. Quisquam odio minima, quod eveniet illo placeat fugit molestias aliquam natus maxime.</li>
                        <li className="mt-5" id="li4">-Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit eos eligendi autem cum, expedita saepe, veritatis facere eius libero ducimus dolor nihil odio consectetur, accusantium velit adipisci voluptatibus illum.</li>
                    </ul>
                </div>

                <Plans/>
                
            </div>
        </main>
    )
}