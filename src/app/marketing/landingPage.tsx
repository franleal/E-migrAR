import Image from "next/image";
import Plans from "@/components/plans";

export default function LandingPage(){
    return(
        <main>
            <div className="w-full">
                <div className="w-full md:h-150 h-auto flex md:flex-row flex-col justify-center md:p-20 p-0 mb-[20px]">
                    <p className="w-100 md:mr-10 m-auto mt-[10px] mb-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, unde recusandae laborum odit labore facilis provident, sit delectus, mollitia explicabo facere fugit temporibus! Sequi tempora, nobis maxime quis eius dicta.  
                    </p>
                   
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative max-w-[400px] md:min-w-[500px]">
                            <Image
                                alt="Main-Image"
                                src={"/images/slider/img6.jpg"}
                                width={700}
                                height={700}
                                className="object-cover object-center rounded-xl"
                            /> 
                        </div>
                    </div>
                                    
                </div>
                <div className="w-full md:px-6 md:m-15 p-0 m-0 mt-[30px] mb-[30px]">
                    <h4 id="info" className="md:text-5xl text-2xl w-full p-0 mt-[15px] ml-[10px]">Lo que hacemos</h4>
                    <ul className="list-none p-0 m-0 text-md max-w-full ml-[10px]">
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