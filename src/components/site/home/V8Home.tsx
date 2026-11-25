import { Link } from "@tanstack/react-router";
import { Fragment, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import symbol from "@/assets/vertex-icon-2.png.asset.json";
import serra from "@/assets/serra/serra_v2_62.png.asset.json";
import gentlemans from "@/assets/gentlemans/gentlemans-desktop.png.asset.json";
import { ADDRESS, MAPS_EMBED_URL, MAPS_LINK } from "@/lib/location";
import { waLink } from "@/lib/whatsapp";
import { FloatingHeader } from "@/components/site/FloatingHeader";
import { comparisons, processSteps, services, storyPhrase } from "./content";
import { HeroHeading } from "./HeroHeading";
import { ImmersiveStory } from "./ImmersiveStory";
import { ScrollSequence } from "./ScrollSequence";
import { HomeForm } from "./HomeForm";
import { useHomeMotion } from "./useHomeMotion";

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-wrap">
        <HeroHeading />
        <p>Pare de perder contratos para concorrentes visualmente inferiores. Construímos o ecossistema digital que valida seu preço e acelera sua decisão de venda.</p>
        <div className="home-actions">
          <Button asChild className="home-button"><a href="#processo">Como funciona</a></Button>
          <Button asChild variant="outline" className="home-button home-button-secondary"><a href="#projetos">Ver projetos entregues</a></Button>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cases = [
    { title: "Serra Seguros e Consórcios", image: serra.url, href: "https://www.serraseguros.com.br/", text: "Seguros e consórcios organizados por tipo, com formulários que ajudam o cliente a pedir cotação." },
    { title: "Gentleman’s Club Barbearia", image: gentlemans.url, href: "https://barbeariagentlemansclub.com/", text: "Um site que apresenta a barbearia, seus serviços e o caminho pra agendar um horário." },
  ];
  return (
    <section id="projetos" className="home-projects" aria-labelledby="projects-title">
      <div className="home-wrap">
        <h2 id="projects-title" data-home-reveal>Projetos da Vertex.</h2>
        <div className="home-cases">
          {cases.map((project, index) => (
            <article key={project.title} className="home-case" data-home-reveal={index === 1 ? "18" : "0"}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site: ${project.title}`}>
                <figure><img src={project.image} alt={`Prévia do site ${project.title}`} width={1600} height={1080} loading="lazy" decoding="async" /></figure>
                <h3>{project.title}</h3>
                <span className="home-case-visit">Visitar site <ArrowUpRight size={15} aria-hidden="true" /></span>
              </a>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
        <Link to="/projetos" className="home-text-link home-projects-more" data-home-reveal>Ver portfólio completo</Link>
      </div>
    </section>
  );
}

function Coffee() {
  return (
    <section id="cafe" className="home-coffee" aria-labelledby="coffee-title">
      <div className="home-wrap home-coffee-layout">
        <div>
          <h2 id="coffee-title" data-home-reveal>Vamos conversar num café?</h2>
          <p data-home-reveal>Se tu é de Caxias ou região, passa no nosso escritório. A gente olha teu site ou Instagram junto e conversa sobre o que vale melhorar.</p>
          <address data-home-reveal>{ADDRESS.street}, sala 804<br />Centro · Caxias do Sul, RS</address>
          <div className="home-actions" data-home-reveal>
            <Button asChild className="home-button"><a href={waLink("Oi, Vertex! Quero marcar um café pra conversar sobre o site da minha empresa.")} target="_blank" rel="noopener noreferrer">Marcar um café</a></Button>
            <a className="home-text-link" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Ver no Google Maps</a>
          </div>
        </div>
        <iframe data-home-reveal title="Mapa do escritório da Exclusive Vertex em Caxias do Sul" src={MAPS_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

export function V8Home() {
  const ref = useRef<HTMLDivElement>(null);
  useHomeMotion(ref);
  return (
    <div className="vx-home" id="inicio" ref={ref}>
      <FloatingHeader home />
      <Hero />
      <ImmersiveStory />
      <section className="home-story" aria-labelledby="home-story-title">
        <div className="home-statement"><div className="home-wrap">
          <h2 id="home-story-title" aria-label={storyPhrase}>
            {storyPhrase.split(" ").map((word, index) => <Fragment key={`${index}-${word}`}>{index > 0 ? " " : null}<span className="home-story-word" aria-hidden="true">{word}</span></Fragment>)}
          </h2>
        </div></div>
      </section>
      <div className="home-shift" aria-hidden="true"><div className="home-shift-stage"><img className="home-shift-logo" src={symbol.url} alt="" width={391} height={761} /></div></div>
      <Projects />
      <ScrollSequence id="services" className="home-services" title="O que a Vertex faz." panels={services.map((service) => ({ label: service.label, content: <><h3>{service.title}</h3><p>{service.text}</p></> }))} />
      <ScrollSequence id="comparison" className="home-comparison" title={<>Sem Vertex <span>× Com Vertex</span></>} panels={comparisons.map((item) => ({ label: item.label, content: <div className="home-pair"><div><h3>Sem Vertex</h3><p>{item.without}</p></div><div><h3>Com Vertex</h3><p>{item.with}</p></div></div> }))} />
      <ScrollSequence id="processo" className="home-process" title="Como a gente trabalha." panels={processSteps.map((step) => ({ label: step.label, content: <><h3>{step.title}</h3><p>{step.text}</p></> }))} />
      <Coffee />
      <HomeForm />
      <footer className="home-footer"><div className="home-wrap"><span>Exclusive Vertex · Caxias do Sul, RS</span><a href="https://instagram.com/exclusive.vertex" target="_blank" rel="noopener noreferrer">Instagram</a></div></footer>
    </div>
  );
}