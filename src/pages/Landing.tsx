import { motion } from 'framer-motion';
import { CaretDoubleRight, Phone, CalendarCheck, MapPin } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import heroCar from '../assets/hero_car.png';
import michaelBaltus from '../assets/michael_baltus.png';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-second overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-second/80 backdrop-blur-lg border-b border-prime/5">
        <div className="container-wide h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tight text-prime leading-none uppercase">Baltus Classic</span>
            <span className="text-[10px] tracking-[0.2em] text-accent font-bold uppercase mt-1">Im Lenkwerk Bielefeld</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.15em] font-semibold text-prime/60">
            <a href="#bestand" className="hover:text-prime transition-colors">Bestand</a>
            <a href="#philosophie" className="hover:text-prime transition-colors">Philosophie</a>
            <a href="#leistungen" className="hover:text-prime transition-colors">Leistungen</a>
            <button 
              onClick={() => navigate('/strategie')}
              className="text-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Strategie
            </button>
          </div>
          <a href="tel:052155730600" className="flex items-center gap-2 px-6 py-2 border border-prime/10 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-prime hover:text-white transition-all">
            <Phone size={16} weight="fill" />
            <span>0521 5573 0600</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-serif text-prime leading-[0.9] tracking-tighter mb-8"
            >
              Jedes Fahrzeug <br />hat eine <span className="text-accent italic">Geschichte.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-prime/60 font-serif italic mb-12 max-w-[500px]"
            >
              „Mich interessieren nicht nur die technischen Daten, sondern die Seele eines Klassikers.“
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#bestand" className="btn-gold flex items-center gap-3">
                <span>AKTUELLER BESTAND</span>
                <CaretDoubleRight size={16} weight="bold" />
              </a>
            </motion.div>
          </div>
          <div className="lg:col-span-6 relative h-[50vh] lg:h-[80vh]">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${heroCar})` }}
            >
              <div className="absolute inset-0 bg-prime/10 mix-blend-multiply rounded-2xl"></div>
              {/* Asset Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl hidden lg:block">
                <span className="block text-[10px] uppercase tracking-widest text-accent font-bold mb-1">IM FOKUS</span>
                <span className="block font-serif text-2xl text-prime">Mercedes 190 E EVO1</span>
                <span className="block text-sm text-prime/40 mt-1">Interessenten: 3 (Vorgemerkt)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curator Statement */}
      <section id="philosophie" className="py-32 bg-prime text-second">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={michaelBaltus} 
              alt="Michael Baltus — Kurator" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <div className="inline-block px-4 py-1 border border-accent/30 rounded-full text-[10px] tracking-[0.3em] font-bold text-accent uppercase">
              PHILOSOPHIE
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-none tracking-tight">
              Kein Bestand.<br /><span className="text-accent italic">Eine Auswahl.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl font-light text-second/70 leading-relaxed max-w-[550px]">
              <p>
                Michael Baltus kauft nur, was er selbst fahren würde. Als Diplom-Ingenieur und leidenschaftlicher Sammler hat er ein Gespür entwickelt, das man nicht lernt — man erwirbt es über Jahrzehnte.
              </p>
              <p>
                Jedes Fahrzeug im Bestand wurde persönlich geprüft, historisch eingeordnet und für würdig befunden. Das bedeutet für Sie: weniger Auswahl, aber die richtige.
              </p>
            </div>
            <div className="pt-8 border-t border-second/10">
              <span className="block font-serif text-2xl mb-1">Dipl.-Ing. Michael Baltus</span>
              <span className="text-accent text-sm font-bold uppercase tracking-widest">Gründer & Kurator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="bestand" className="py-32">
        <div className="container-wide">
          <div className="max-w-[800px] mb-24">
            <span className="text-[10px] tracking-[0.3em] text-accent font-bold uppercase mb-4 block">PORTFOLIO</span>
            <h2 className="text-5xl md:text-7xl font-serif text-prime mb-6 tracking-tight">
              Aktuell Verfügbar.
            </h2>
            <p className="text-prime/40 font-serif text-2xl italic">Der Bestand wechselt. Die Qualität nicht.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Mercedes 190 E Evo1",
                year: "1989",
                price: "139.000 €",
                img: "https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/scb874f7c236b8b48/image/iad9fa87e00095536/version/1772197078/mercedes-190-e-evo1-w201-1989.jpg",
                note: "Limitiert auf 502 Stück. Originalzustand aus Sammlerhand."
              },
              {
                title: "VW T1 Samba 21-Fenster",
                year: "1963",
                price: "89.900 €",
                img: "https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/scb874f7c236b8b48/image/i36848a6ed214e34a/version/1772196907/vw-t1-samba-bus-1963.jpg",
                note: "Umfassend restauriert. Die Ikone der Bulli-Kultur."
              },
              {
                title: "Morgan Plus 4",
                year: "2012",
                price: "49.500 €",
                img: "https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/scb874f7c236b8b48/image/if13d578d8173ff8c/version/1768312829/morgan-plus-4-2012.jpg",
                note: "Sportgrey mit schwarzem Leder. Purismus in Reinform."
              }
            ].map((car, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-8 bg-zinc-200">
                  <img src={car.img} alt={car.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-prime/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {car.sold && (
                    <div className="absolute top-4 right-4 bg-prime text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Vermittelt
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">DETAILS ANSEHEN →</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-prime">{car.title}</h3>
                  <span className="font-bold text-accent text-sm tracking-widest px-2 py-1 bg-accent/5 rounded">{car.price || 'SOLD'}</span>
                </div>
                <div className="flex gap-4 text-[10px] text-prime/40 font-bold uppercase tracking-widest mb-4">
                  <span>BJ: {car.year}</span>
                  <span>•</span>
                  <span>GEPRÜFTES OBJEKT</span>
                </div>
                <p className="text-prime/50 text-sm italic font-light leading-relaxed">„{car.note}“</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-32 bg-second border-y border-prime/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-prime leading-tight tracking-tight">
              Mehr als ein <span className="text-accent italic">Verkauf.</span>
            </h2>
            <p className="text-prime/50 text-lg md:text-xl font-light leading-relaxed max-w-[500px]">
              Ob Sie Ihren Wunschklassiker suchen, Ihr Fahrzeug in die richtigen Hände geben oder unverbindlich beraten werden möchten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "SUCHE", text: "Wir finden Ihren Wunschklassiker durch unser exklusives Netzwerk.", icon: <MapPin size={32} weight="light" /> },
              { title: "ANKAUF", text: "Fairer Ankauf von hochwertigen Sammlerstücken & Youngtimern.", icon: <CalendarCheck size={32} weight="light" /> },
              { title: "VERMITTLUNG", text: "Professionelle Vermarktung im Kundenauftrag am Standort Lenkwerk.", icon: <Phone size={32} weight="light" /> },
              { title: "BERATUNG", text: "Zustandsbewertung und Markteinschätzung durch den Dipl.-Ing.", icon: <Phone size={32} weight="light" /> }
            ].map((service, i) => (
              <div key={i} className="p-10 bg-white border border-prime/5 hover:border-accent/30 transition-all group">
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                <h3 className="font-serif text-2xl text-prime mb-4 tracking-tight">{service.title}</h3>
                <p className="text-prime/50 text-sm leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="py-32 bg-prime text-second">
        <div className="container-wide text-center max-w-[800px] mx-auto">
          <span className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase mb-8 block">KONTAKT</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
            Das richtige Fahrzeug wartet <span className="text-accent italic">nicht lange.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:info@baltus-classic.de" className="btn-gold w-full md:w-auto">TERMIN ANFRAGEN</a>
            <a href="tel:052155730600" className="px-12 py-3 border border-second/20 hover:bg-second hover:text-prime transition-all w-full md:w-auto font-medium">0521 55 73 06 00</a>
          </div>
          
          <div className="mt-40 pt-20 border-t border-second/5 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <span className="block font-serif text-xl mb-6">Baltus Classic</span>
              <p className="text-second/40 text-sm leading-relaxed font-light">
                Im Lenkwerk Bielefeld<br />
                Am Stadtholz 24–26<br />
                33609 Bielefeld
              </p>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-accent font-bold mb-6">NAVIGATION</span>
              <ul className="space-y-3 text-sm font-light text-second/60">
                <li><a href="#bestand" className="hover:text-accent transition-colors">Bestand</a></li>
                <li><a href="#philosophie" className="hover:text-accent transition-colors">Philosophie</a></li>
                <li><a href="#leistungen" className="hover:text-accent transition-colors">Leistungen</a></li>
                <li><button onClick={() => navigate('/strategie')} className="hover:text-accent transition-colors">Strategie-Präsentation</button></li>
              </ul>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-accent font-bold mb-6">RECHTLICHES</span>
              <ul className="space-y-3 text-sm font-light text-second/60">
                <li><a href="#" className="hover:text-accent transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
