import Button from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="min-h-screen mt-44 px-10 mb-10">

            <main className="container mx-auto">

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3">
                        <div className="p-8 rounded-lg border dark:border-dark mb-8">
                            <h2 className="text-xl font-semibold border-l-4 border-primary pl-2 dark:text-secondary mb-6">CONTACT INFO</h2>
                            <p className="dark:text-third mb-6">
                                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.
                                Just copy and paste the files, add a little code and you done.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold dark:text-secondary mb-2">Our Office</h3>
                                    <p className="dark:text-third">Rampura, Banasree, Dhaka</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold dark:text-secondary mb-2">Email Us</h3>
                                    <p className="dark:text-third">info@xyz.com</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold dark:text-secondary mb-2">Call Us</h3>
                                    <p className="dark:text-third">+8801929378419</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-lg border dark:border-dark">
                            <h2 className="text-xl font-semibold border-l-4 border-primary pl-2 dark:text-secondary mb-6">FOLLOW US</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: 'f', label: 'Fans', count: '12,345' },
                                    { icon: '✔', label: 'Followers', count: '12,345' },
                                    { icon: 'In', label: 'Connects', count: '12,345' },
                                    { icon: '☒', label: 'Followers', count: '12,345' },
                                    { icon: '☐', label: 'Subscribers', count: '12,345' },
                                    { icon: '✔', label: 'Followers', count: '12,345' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center p-3 rounded">
                                        <span className="mr-2">{item.icon}</span>
                                        <div>
                                            <p className="font-semibold">{item.count}</p>
                                            <p className="text-sm dark:text-third">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <div className="p-8 rounded-lg border dark:border-dark mb-8">
                            <h2 className="text-xl font-semibold border-l-4 border-primary pl-2 dark:text-secondary mb-6">CONTACT US</h2>
                            <form>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block dark:text-secondary mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 border dark:border-fourth rounded focus:outline-none bg-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block dark:text-secondary mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 border dark:border-fourth rounded focus:outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block dark:text-secondary mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-2 border dark:border-fourth rounded focus:outline-none bg-transparent"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block dark:text-secondary mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full px-4 py-2 border dark:border-fourth rounded focus:outline-none bg-transparent"
                                    ></textarea>
                                </div>

                                <Button variant='outline' size='md'
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        <div className="p-8 rounded-lg border dark:border-dark">
                            <h2 className="text-xl font-semibold border-l-4 border-primary pl-2 dark:text-secondary mb-4">NEWSLETTER</h2>
                            <p className="dark:text-third mb-6">
                                Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-grow px-4 py-2 border dark:border-fourth rounded focus:outline-none bg-transparent"
                                />
                                <button className="bg-dark text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 whitespace-nowrap">
                                    Sign Up
                                </button>
                            </div>

                            <p className="dark:text-third">Lorem ipsum dolor sit amet elit</p>
                        </div>
                    </div>
                </div>
                <div className='my-20 w-10/12 mx-auto'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.989984541018!2d90.42523889217972!3d23.762675673344688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8076f42fcb9%3A0x92c59481fa058655!2sMeradia%20Kacha%20Bazar!5e0!3m2!1sen!2sbd!4v1745130442724!5m2!1sen!2sbd"
                        height="400"
                        className="w-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </main>
        </div>
    );
}