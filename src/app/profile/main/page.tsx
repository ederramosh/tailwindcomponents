'use client';

import { useState } from "react";

export default function MainPage() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [comment, setComment] = useState('');

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-stone-100">
                <div className="p-10 rounded shadow-sm bg-stone-50 max-w-lg w-2/3">
                    <div className="mb-6 p-10 bg-white -m-10">
                        <h1 className="font-bold text-2xl text-stone-300">Formulaire de contact</h1>
                    </div>
                    <form>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col mb-4">
                                <label>
                                    <span className="block text-xs font-light text-stone-400">FirstName</span>
                                </label>
                                <input type="text" className="mt-2 px-4 py-2 shadow rounded text-stone-400" 
                                 value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label>
                                    <span className="block text-xs font-light text-stone-400">LastName</span>
                                </label>
                                <input type="text" placeholder="Votre prénom" className="mt-2 px-4 py-2 shadow rounded text-stone-400" 
                                 value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                            </div>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label>Email
                                <span className="block text-xs font-light text-stone-400">Email</span>
                            </label>
                            <input type="email" placeholder="Votre Adresse email" className="mt-2 px-4 py-2 shadow rounded text-stone-400"
                              value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label>Contact
                                <span className="block text-xs font-light text-stone-400">Contact</span>
                            </label>
                            <input type="text" placeholder="Votre téléphone" className="mt-2 px-4 py-2 shadow rounded text-stone-400" 
                              value={contact} onChange={(e) => { setContact(e.target.value) }} />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label>Comment
                                <span className="block text-xs font-light text-stone-400">Comment</span>
                            </label>
                            <textarea placeholder="Votre message en plus 50 mots" className="mt-2 px-6 py-2 shadow rounded text-stone-400" 
                              value={comment} onChange={(e) => { setComment(e.target.value) }}></textarea>
                        </div>
                        <div className="mt-6 flex gap-6">
                            <button type="submit" className="rounded-full bg-orange-300 py-4 px-10 font-bold text-white shadow hover:bg-blue-500">Submit</button>
                            <button type="submit" className="rounded-full bg-transparent py-4 px-10 font-bold text-stone-400 border border-stone-200 hover:border-orange-300 hover:text-orange-300">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}