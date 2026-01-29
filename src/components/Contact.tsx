import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const contactInfo = [{
  icon: Phone,
  label: "Phone",
  value: "+1 (234) 567-890",
  href: "tel:+1234567890"
}, {
  icon: MessageCircle,
  label: "WhatsApp",
  value: "+1 (234) 567-890",
  href: "https://wa.me/1234567890"
}, {
  icon: Mail,
  label: "Email",
  value: "hello@bakejoy.com",
  href: "mailto:hello@bakejoy.com"
}, {
  icon: Clock,
  label: "Hours",
  value: "Mon-Sat: 8AM - 8PM"
}];
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      phone: "",
      message: ""
    });
  };
  return <section id="contact" className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-primary mb-6">
              Visit Our Bakery
            </h2>
            
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground">Mohan Bakery</p>
                <p className="text-foreground/70">
                  123 Sweet Street, Cake Town<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card mb-8 aspect-video">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="BakeJoy Bakery Location" />
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(item => <a key={item.label} href={item.href} target={item.href?.startsWith("http") ? "_blank" : undefined} rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined} className={`flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 transition-all duration-200 ${item.href ? "hover:bg-secondary hover:border-primary cursor-pointer" : ""}`}>
                  <item.icon className="w-5 h-5 text-coral" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground text-sm">
                      {item.value}
                    </p>
                  </div>
                </a>)}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border/50">
            <h3 className="font-display text-2xl md:text-3xl text-coral mb-2">
              Send us a message
            </h3>
            <p className="text-foreground/70 mb-6">
              Have a question or special request? We'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required className="h-12 rounded-xl" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="+1 (234) 567-890" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required className="h-12 rounded-xl" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Your Message
                </label>
                <Textarea id="message" placeholder="Tell us about your order or question..." value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} required rows={4} className="rounded-xl resize-none" />
              </div>

              <Button type="submit" className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;