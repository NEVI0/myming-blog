import { ChevronRight } from 'lucide-react';

import { Section } from '@app/components/common';

export default function About() {
  return (
    <Section title="Sobre o blog e seu propósito" id="about">
      <div className="flex flex-col gap-4">
        <p>
          Bem-vindo ao MyMind, um espaço onde suas ideias ganham vida! Aqui,
          você tem total liberdade para compartilhar seus pensamentos,
          experiências e conhecimentos com o mundo.
        </p>

        <p>
          Nossa missão é criar uma comunidade vibrante e diversificada, onde
          cada pessoa pode expressar-se livremente. Seja você um escritor
          experiente ou alguém que está começando sua jornada na escrita, o
          MyMind é o lugar perfeito para você.
        </p>

        <p>No MyMind, você pode:</p>

        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4">
            <div>
              <ChevronRight className="text-primary size-4" />
            </div>

            <p>Compartilhar suas histórias e experiências pessoais;</p>
          </li>

          <li className="flex items-center gap-4">
            <div>
              <ChevronRight className="text-primary size-4" />
            </div>

            <p>Conectar-se com pessoas que compartilham seus interesses;</p>
          </li>

          <li className="flex items-center gap-4">
            <div>
              <ChevronRight className="text-primary size-4" />
            </div>

            <p>Receber feedback construtivo da comunidade;</p>
          </li>

          <li className="flex items-center gap-4">
            <div>
              <ChevronRight className="text-primary size-4" />
            </div>

            <p>Explorar diferentes perspectivas e ideias;</p>
          </li>
        </ul>

        <p>
          Acreditamos que cada pessoa tem uma voz única e valiosa para
          compartilhar. Não importa o assunto - desde viagens e culinária até
          tecnologia e filosofia - seu conteúdo é bem-vindo aqui.
        </p>

        <p>
          Junte-se a nós nesta jornada de descoberta e expressão. Crie sua conta
          agora e comece a compartilhar suas ideias com o mundo!
        </p>
      </div>
    </Section>
  );
}
