import { motion } from 'framer-motion';
import { ArrowLeft, Target, Users, Layout, Trophy, Rocket, ShieldCheck } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const Strategy = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "markt",
      title: "1. DER MARKT — Was wir über deine Branche wissen",
      icon: <Target size={32} weight="light" className="text-accent" />,
      content: (
        <div className="space-y-6">
          <p>Der Klassiker-Markt 2026 ist gespalten — und genau darin liegt deine Chance.</p>
          <p>
            Auf der einen Seite: Standardklassiker unter Normalniveau. Massenware, die auf mobile.de zwischen hundert identischen Inseraten versinkt. Kein Kontext, keine Geschichte, keine Persönlichkeit — nur Fotos und Kilometerstände. Auf der anderen Seite: exzellent dokumentierte Youngtimer und kuratierte Raritäten, für die eine neue Generation digitalaffiner Sammler aktiv sucht und bereit ist, signifikant mehr zu zahlen.
          </p>
          <div className="bg-prime/5 border-l-2 border-accent p-6 my-8">
            <h4 className="font-serif text-xl mb-4 text-prime">Drei Insights, die den Unterschied machen:</h4>
            <ul className="space-y-4 text-sm md:text-base">
              <li><strong>Vertrauen schlägt Preis:</strong> Käufer recherchieren den Händler, bevor sie das Fahrzeug anfragen. Wer online keine Persönlichkeit zeigt, wird gar nicht erst kontaktiert.</li>
              <li><strong>Der Standort ist ein Asset:</strong> Das Lenkwerk ist Bielefelds bekannteste Adresse für automobile Kultur. Kein Wettbewerber hat eine vergleichbare Verortung.</li>
              <li><strong>Die Youngtimer-Welle ist real:</strong> Käufer der 80er/90er Ikonen sind digital, anspruchsvoll und wollen bestätigt werden, nicht überredet.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "zielgruppe",
      title: "2. DEINE ZIELGRUPPE — Wer wirklich kauft (und warum)",
      icon: <Users size={32} weight="light" className="text-accent" />,
      content: (
        <div className="space-y-6">
          <p>Vergiss die demografische Schublade. Dein Käufer ist jemand, der ein Fahrzeug nicht *braucht*, sondern *wählt*.</p>
          <p>
            Was ihn wirklich bewegt, sind zwei Kräfte: <strong>Emotion und Expertise</strong>. Er will das Gefühl kaufen, aber auch die Sicherheit, dass der Verkäufer mehr weiß als er selbst. Das ist der <em>Authority Bias</em>.
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-prime/70 text-lg font-serif">
            "Ein kurzer kuratorischer Text leistet mehr als zehn professionelle Hochglanzfotos."
          </blockquote>
        </div>
      )
    },
    {
      id: "strategie",
      title: "3. WAS WIR GEBAUT HABEN — Die Strategie",
      icon: <Layout size={32} weight="light" className="text-accent" />,
      content: (
        <div className="space-y-20">
          {[
            { 
              quote: "Wir haben einen kuratorischen Ton gewählt, keine Händlersprache.", 
              text: "Weil deine Zielgruppe sofort hört, wenn jemand verkaufen will — und sofort abschaltet. Die Sprache 'Jedes Fahrzeug hat eine Geschichte. Wir kennen sie.' positioniert Baltus Classic nicht als Verkäufer, sondern als Wissensträger. Das aktiviert Authority Bias: Der Besucher vertraut dem, der mehr weiß als er selbst." 
            },
            { 
              quote: "Wir haben Michael Baltus sichtbar gemacht — als Person, nicht als Impressum.", 
              text: "Im Luxus- und Sammlermarkt kaufen Menschen von Menschen. Das ist kein Marketing-Klischee, das ist dokumentierte Kaufpsychologie: Parasoziale Vertrautheit senkt die wahrgenommene Risikobereitschaft. Wer das Gesicht, die Haltung und die Denkweise des Händlers kennt, bevor er anruft, fühlt sich beim ersten Gespräch bereits bekannt." 
            },
            { 
              quote: "Wir haben das Lenkwerk zur Bühne gemacht, nicht zum Adress-Feld.", 
              text: "Der Standort im Lenkwerk ist das stärkste Differenzierungsmerkmal, das Baltus Classic hat — und das am wenigsten genutzte. Wir nutzen diesen Standort als Social Proof durch Assoziation: Die Reputation des Lenkwerks färbt auf Baltus Classic ab, ohne dass wir einen einzigen Satz darüber schreiben müssen." 
            },
            { 
              quote: "Wir haben keinen Preis in den Hero gebaut.", 
              text: "Weil Preis-Anker die Wahrnehmung beschränken. Wer zuerst den Preis sieht, denkt sofort in Kategorien. Wer zuerst die Geschichte und die Qualität sieht, verankert seinen Wert anders — höher. Dieses Prinzip heißt Anchoring." 
            },
            { 
              quote: "Wir haben den primären CTA auf ein Gespräch, nicht auf einen Kauf gesetzt.", 
              text: "'Termin anfragen' statt 'Jetzt kaufen' klingt nach einer kleinen Entscheidung — ist aber eine strategisch große. Niedrigschwellige CTAs erhöhen die Conversion-Rate messbar, weil sie Commitment in Stufen aufbauen." 
            },
            { 
              quote: "Wir haben die Knappheit strukturell eingebaut — ohne Druck-Rhetorik.", 
              text: "Der Satz 'Der Bestand wechselt. Die Qualität nicht.' ist kein Slogan — es ist eine psychologische Aussage. Er aktiviert Loss Aversion: Die Vorstellung, ein bestimmtes Fahrzeug könnte weg sein, bevor man handelt, erzeugt stille Dringlichkeit." 
            }
          ].map((item, i) => (
            <div key={i} className="space-y-6">
              <blockquote className="text-xl md:text-2xl font-serif text-prime border-l-2 border-accent pl-8 py-2 leading-snug">
                "{item.quote}"
              </blockquote>
              <p className="text-prime/70 text-lg font-light leading-relaxed pl-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "positionierung",
      title: "4. DIE POSITIONIERUNG — Markt-Status",
      icon: <Trophy size={32} weight="light" className="text-accent" />,
      content: (
        <div className="space-y-6">
          <p className="text-2xl font-serif text-accent italic">"Kein Händler. Ein Kurator — der das richtige Fahrzeug für den richtigen Sammler findet."</p>
          <p>Dieser Satz hebt dich sofort von moblie.de-Inserenten und seelenlosen Autohausketten ab. Es geht um Auswahl, nicht um Masse.</p>
        </div>
      )
    },
    {
      id: "ausblick",
      title: "5. WAS SPÄTER NOCH MÖGLICH IST",
      icon: <Rocket size={32} weight="light" className="text-accent" />,
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-prime/70">
            <li>Fahrzeug-Detail-Seiten mit tiefem Storytelling</li>
            <li>Strukturiertes Wunschfahrzeug-Anfrage-Formular</li>
            <li>Archiv vermittelter Fahrzeuge als Track Record</li>
            <li>Mehrsprachigkeit (DE/EN) für internationalen Markt</li>
          </ul>
        </div>
      )
    },
    {
      id: "versprechen",
      title: "6. UNSER VERSPRECHEN",
      icon: <ShieldCheck size={32} weight="light" className="text-accent" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl">Wir liefern keine Website. Wir liefern eine neue Art, wie dein Geschäft wahrgenommen wird.</p>
          <p className="font-serif text-2xl text-accent border-t border-prime/10 pt-8 mt-12">
            "Dein Wissen hat bisher nur diejenigen erreicht, die schon bei dir waren. Das ändern wir."
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-second pt-24 pb-32">
      <div className="container-wide">
        <motion.button 
          onClick={() => navigate('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-prime/50 hover:text-accent transition-colors mb-20 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide border-b border-transparent group-hover:border-accent">ZURÜCK ZUR WEBSITE</span>
        </motion.button>

        <div className="max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-prime mb-6 leading-none tracking-tight">
              STRATEGIE-<br />PRÄSENTATION
            </h1>
            <p className="text-accent font-serif text-xl italic uppercase tracking-wider">
              PRÄSENTATION — BALTUS CLASSIC
            </p>
            <p className="text-prime/40 text-sm mt-4">
              Erstellt von Digital-Fundament | Für das Erstgespräch
            </p>
          </motion.div>

          <div className="space-y-32">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-8 mb-10">
                  <div className="mt-1">{section.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-serif text-prime">{section.title}</h2>
                </div>
                <div className="pl-16 text-prime/80 leading-relaxed text-lg font-light">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
