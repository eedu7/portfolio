import {useRef, useState} from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [loading, setLoading] = useState(false);

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }
    const handleSubmit = async  (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        await emailjs.send(
            "service_qb6g5in",
            "template_gkkvo3c",
            {
                from_name: form.name,
                to_name: "Mueed Ahmad",
                from_email: form.email,
                to_email: "mueedahmad067@gmail.com",
                message: form.message,
            },
            "STU0WDNTliXSjMfjl"
        )
            setLoading(false);
        alert("Message sent!");
        setForm({name: "", email: "", message: ""});
        }
        catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong! ");

        }



    }

    return (<section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600">
                        Whether you&apos;re looking to build a new website, improve your existing platform
                        , or bring a unique prooject to life, I&apos;m here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required
                                   className="field-input" placeholder="John Doe"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required
                                   className="field-input" placeholder="john.doe@gmail.com"/>
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea  name="message" value={form.message} onChange={handleChange} required
                                   className="field-input" rows={5} placeholder="Hi, I'm interested in"/>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>

        </section>)
}
export default Contact
