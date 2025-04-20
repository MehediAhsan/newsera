import Image from "next/image";
import React from "react";

const teamMembers = [
    {
        name: "Ethan Welch",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1622020920816-cd528763211a?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ethan Welch",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1509112756314-34a0badb29d4?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ethan Welch",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1698885765651-e08fff02b096?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ethan Welch",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1698885765651-e08fff02b096?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const AboutPage = () => {
    return (
        <div className="mt-40">
            <section className="space-y-12 px-10">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-10 h-1 bg-primary rounded-sm"></span>
                        <h2 className="text-2xl font-bold dark:text-third">Our Mission</h2>
                    </div>
                    <p className="dark:text-secondary leading-relaxed text-sm">
                        Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
                        Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                        <br /><br />
                        Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-10 h-1 bg-primary rounded-sm"></span>
                        <h2 className="text-2xl font-bold dark:text-third">Our Vision</h2>
                    </div>
                    <p className="dark:text-secondary leading-relaxed text-sm">
                        Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
                        Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                        <br /><br />
                        Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row my-20">
                <div className="md:w-1/2 bg-dark flex justify-center items-center p-8">
                    <Image
                        src="https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Team working"
                        className="rounded shadow-lg w-full max-w-md object-cover"
                        width={1000}
                        height={500}
                    />
                </div>
                <div className="md:w-1/3 flex flex-col justify-center p-10">
                    <span className="text-primary uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                        <span className="w-10 h-1 bg-primary rounded-sm"></span>
                        Our Top Services
                    </span>
                    <h2 className="text-3xl font-bold mb-4">Our Best Services</h2>
                    <p className="dark:text-gray-300 leading-relaxed mb-4">
                        Mollit anim laborum duis adseu dolor iuyn voluptate velit ess cillum
                        dolore egru loffre dsu quality mollit anim laborumu is au dolor in
                        voluptate velit cillu.
                    </p>
                    <p className="dark:text-gray-400 leading-relaxed mb-6 text-sm">
                        Mollit anim laborum. Dvcuuis aute serunt iruxvfg dhjko lohr indd re
                        voluptate velit esscillum lore eu quife nrulla parihatur. Excghcepteur
                        sfwsignjt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.
                    </p>
                    <button className="bg-primary w-fit text-white px-6 py-3 rounded transition text-sm">
                        More About Us
                    </button>
                </div>
            </section>

            <section className="pb-20">
                <div className="max-w-max mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-2 text-sm text-primary uppercase tracking-wider">
                            <span className="w-10 h-1 bg-primary rounded-sm"></span>
                            Our Professional Members
                        </div>
                        <h2 className="text-3xl font-bold">
                            Our Team Mambers
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-10">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="shadow-md rounded-lg overflow-hidden"
                            >
                                <div className="bg-blue-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-52 object-cover"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-primary font-semibold border-t border-primary inline-block pt-2">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};


export default AboutPage;
