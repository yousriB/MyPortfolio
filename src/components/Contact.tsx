import { useEffect, useState } from 'react';
import {
  CheckCircle,
  Copy,
  Github,
  Linkedin,
  Mail,
  MailCheck,
  Phone,
  Send,
} from 'lucide-react';
import { useContactPrefill } from '../hooks/useContactPrefill';

const EMAIL = 'benaliyousri00@gmail.com';

export default function Contact() {
  const { prefill } = useContactPrefill();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefill.service);
  const [budget, setBudget] = useState(prefill.budget);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copyAlert, setCopyAlert] = useState(false);

  useEffect(() => {
    if (prefill.version > 0) {
      setService(prefill.service);
      setBudget(prefill.budget);
    }
  }, [prefill]);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const temp = document.createElement('textarea');
        temp.value = EMAIL;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      setCopyAlert(true);
      setTimeout(() => setCopyAlert(false), 3000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setService('Essential Landing Page');
    setBudget('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-brand-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 gsap-reveal">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let's create <br className="hidden sm:inline" />
                something amazing.
              </h2>
              <p className="text-slate-400 font-light leading-relaxed">
                Have an idea, project blueprint, or security refactoring request? Send me a
                message, or simply copy my direct address below.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                Direct Mailbox
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-brand-950/80 p-3 rounded-xl border border-white/10">
                <span className="font-mono text-xs sm:text-sm text-white select-all break-all flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  {EMAIL}
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-blue-400 text-black font-mono text-xs font-bold uppercase rounded transition-all"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy Mail
                </button>
              </div>
              {copyAlert && (
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 pt-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Email address copied successfully!
                </div>
              )}
            </div>

            <div className="flex items-center space-x-6 text-slate-400">
              <a
                href="https://github.com/yousriB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/benali-yousri-601352260/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://wa.me/21621338785"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <Phone className="w-4 h-4 text-emerald-400" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 relative gsap-reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-brand-950 border border-white/10 rounded-lg p-3 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-brand-950 border border-white/10 rounded-lg p-3 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Requested Service
                  </label>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-brand-950 border border-white/10 rounded-lg p-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Essential Landing Page">Creative Landing Page ($1,200)</option>
                    <option value="Full-Stack SaaS">Full-Stack SaaS Platform ($3,500)</option>
                    <option value="Creative Animated Site">Creative Web Experience (Custom)</option>
                    <option value="Security Consultation">Security Audit & Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Allocated Budget
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. $1,200"
                    className="w-full bg-brand-950 border border-white/10 rounded-lg p-3 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Brief Project Description
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit about your ideas, targets, and goals..."
                  className="w-full bg-brand-950 border border-white/10 rounded-lg p-3 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-blue-400 text-black font-mono font-bold uppercase rounded text-xs tracking-wider transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Project Details</span>
              </button>
            </form>

            {submitted && (
              <div className="absolute inset-0 bg-brand-950 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 animate-[fadeIn_0.4s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MailCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Project Details Received!</h3>
                <p className="text-sm text-slate-400 max-w-sm">
                  Thanks for reaching out! Your configurations and contact details have been
                  securely formatted. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={reset}
                  className="px-5 py-2.5 text-xs font-mono font-bold bg-white/5 border border-white/10 text-slate-300 hover:text-white rounded transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
