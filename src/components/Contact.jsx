import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827]" style={{fontFamily: 'Manrope, ui-sans-serif, system-ui'}}>Let’s build something together</h2>
        <p className="mt-3 text-[#111827]/70 max-w-2xl mx-auto">Have a project in mind or just want to say hi? I’m open to freelance and collaboration.</p>
        <div className="mt-8 inline-flex flex-col sm:flex-row gap-3">
          <a href="mailto:hello@hanif.design" className="px-6 py-3 rounded-xl bg-[#111827] text-[#E3F2FD] shadow-lg shadow-black/10 hover:shadow-black/20 transition-all">Email Me</a>
          <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-[#111827] border border-black/5 hover:bg-[#E3F2FD]/60 transition-colors">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
