import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";
import { services } from "./content";
import { homeFormLink, homeFormSchema } from "./form-model";

export function HomeForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const read = (field: string) => String(form.get(field) ?? "");
    const result = homeFormSchema.safeParse({ nome: read("nome"), empresa: read("empresa"), projeto: read("projeto"), detalhes: read("detalhes") });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    // A direct user action opens a draft, never sends a message automatically.
    const popup = window.open(homeFormLink(result.data), "_blank", "noopener,noreferrer");
    if (popup) popup.opener = null;
  }

  return (
    <section id="contato" className="home-contact" aria-labelledby="contact-title">
      <div className="home-wrap home-contact-layout">
        <div>
          <h2 id="contact-title" data-home-reveal>Vamos falar do teu site?</h2>
          <p data-home-reveal>Sou o Lorenzo, fundador da Vertex. Me conta o que tua empresa faz e o que tu quer melhorar.</p>
        </div>
        <form className="home-form" data-home-reveal onSubmit={submit} onChange={() => setErrors({})}>
          <div className="home-form-fields">
            <label className="home-field" htmlFor="home-name">Teu nome
              <input id="home-name" name="nome" autoComplete="name" required maxLength={80} pattern={".*\\S.*"} aria-invalid={Boolean(errors['nome'])} aria-describedby={errors['nome'] ? 'home-name-error' : undefined} />
              {errors['nome'] && <span className="home-error" id="home-name-error">{errors['nome']}</span>}
            </label>
            <label className="home-field" htmlFor="home-company">Empresa
              <input id="home-company" name="empresa" autoComplete="organization" required maxLength={100} pattern={".*\\S.*"} aria-invalid={Boolean(errors['empresa'])} aria-describedby={errors['empresa'] ? 'home-company-error' : undefined} />
              {errors['empresa'] && <span className="home-error" id="home-company-error">{errors['empresa']}</span>}
            </label>
          </div>
          <label className="home-field" htmlFor="home-service">O que tu precisa?
            <select id="home-service" name="projeto" required aria-label="O que tu precisa?" aria-invalid={Boolean(errors['projeto'])}>
              <option value="">Seleciona uma opção</option>
              {services.map((service) => <option key={service.label}>{service.label}</option>)}
              <option>Quero conversar primeiro</option>
            </select>
            {errors['projeto'] && <span className="home-error">{errors['projeto']}</span>}
          </label>
          <label className="home-field" htmlFor="home-details">Conta um pouco sobre o projeto (opcional)
            <textarea id="home-details" name="detalhes" rows={3} maxLength={600} />
          </label>
          <Button type="submit" className="home-button">Continuar no WhatsApp</Button>
          <p className="home-hint">Os dados vão na mensagem pra tu revisar antes de enviar. <a href={waLink("")} target="_blank" rel="noopener noreferrer">Abrir conversa direta</a></p>
        </form>
      </div>
    </section>
  );
}