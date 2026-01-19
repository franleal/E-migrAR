"use client"
import Image from "next/image"
import { FormEvent, useState } from 'react';


export default function Contact(){
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error ?? 'Error desconocido');
        } else {
            setResult('¡Mensaje enviado con éxito!');
            form.reset();
            
        }
        setLoading(false);
    }
    
    return(
        // <div className="w-[100%] min-h-screen bg-gradient-to-br from-blue-300 via-blue-250 to-blue-100 flex flex-col justify-cente">
        //     <div className="w-[70%] h-[50rem] bg-[#F9FAFB] flex flex-row m-auto rounded-xl">
        //         <div className="w-[50%] relative text-center rounded-xl bg-green-200">
        //             <h2 className="text-4xl mt-30">¡Envianos tu consulta!</h2>
        //             <p className="w-80 mt-30 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in, omnis facilis unde sunt eos fuga cumque velit? Asperiores obcaecati deleniti earum possimus. Quas ex dolore cum molestias, earum alias?</p>
        //             <Image
        //                 src="/images/logo/logo2.png"
        //                 alt="MailImage"
        //                 fill
        //                 className="object-cover object-center mt-40"
        //                 priority
        //             />
        //         </div>
        //         <form onSubmit={handleSubmit} className="w-[50%] flex flex-col items-center justify-center">
        //             <div className="w-full h-100 flex flex-col justify-center bg-yellow-200">
        //                 <div className="flex flex-col items-center">
        //                     <input type="text" name="name" placeholder="Name" className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
        //                     <input type="text" name="email" placeholder="Email" className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                            
        //                 </div>
        //                 <label className="m-auto text-xl">Ingrese su mensaje</label>
        //                 <textarea name="message" className="w-[80%] h-100 m-auto border-2"></textarea>
        //             </div>
        //             <button type="submit" disabled={loading} className="w-50 h-10 bg-orange-300 rounded-xl mt-30">{loading ? 'Enviando...' : 'Enviar'} </button>
        //             {result && <p className="text-sm text-green-600 bg-yellow-200">{result}</p>}
        //             {error && <p className="text-sm text-red-600 bg-yellow-200">{error}</p>}
        //         </form> 
        //     </div>
        // </div>

        <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-250 to-blue-100 flex flex-col justify-center py-12">
            <div className="w-[70%] bg-[#F9FAFB] flex flex-row m-auto rounded-lg overflow-hidden h-[700px] shadow-xl shadow-black-500">

                <div className="w-1/2 relative text-center p-10 rounded-xl m-2">
                    <div className="bg-[url('/images/general/img6.jpg')] bg-cover bg-center absolute inset-0 rounded-xl">
                        <div className="absolute inset-0 bg-black/50 rounded-xl"/>
                    </div>

                    <div className="relative text-center p-10 z-20 text-white">
                        <h2 className="text-6xl mt-6 z-20">¡Envianos tu consulta!</h2>
                        <p className="w-80 mt-15 m-auto z-20 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in, omnis facilis unde sunt eos fuga cumque velit? ...</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="w-1/2 flex flex-col items-center justify-center p-8">

                    <div className="relative w-full h-[280px] mt-5 mb-10">
                        <Image
                            src="/images/logo/logo2.png"
                            alt="MailImage"
                            fill
                            className="object-cover z-10"
                            priority
                        />
                    </div> 
                    <div className="w-full flex flex-col justify-center">
                        <div className="flex flex-col items-center">
                            <input name="name" placeholder="Name" className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                            <input name="email" placeholder="Email" className="mb-10 h-10 w-[70%] border-b-2 border-b-black focus:outline-none"/>
                        </div>

                        <label className="block text-center mb-2 text-xl">Ingrese su mensaje</label>
                        <textarea name="message" className="w-[80%] h-[180px] m-auto border-2"></textarea>
                    </div>

                    <button type="submit" disabled={loading} className="w-40 h-20 bg-[#7ee8da] rounded-xl mt-6 hover:bg-[#7ee8da] hover:shadow-lg hover:shadow-blue-500/50">
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {result && <p className="text-sm text-green-600 mt-2">{result}</p>}
                    {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
                </form>
            </div>
        </div>
    )
}