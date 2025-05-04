import { Section } from '@app/components/common';

export default function About() {
  return (
    <Section title="Sobre o blog e seu propósito" id="about">
      <div className="flex flex-col gap-4">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vulputate tristique massa, in lacinia purus vehicula id. Etiam porta
          rhoncus massa id suscipit. Ut quam est, sollicitudin vel libero nec,
          suscipit tristique lectus. Donec ultrices lorem enim, at dignissim
          massa molestie sit amet.
        </p>

        <p className="text-gray-600">
          Nullam bibendum dignissim lorem sit amet molestie. Sed iaculis ipsum
          eget libero facilisis, eget lobortis magna luctus. Nulla egestas
          fermentum accumsan. Nunc placerat aliquam magna a mattis. Nam
          vestibulum leo at nisi pharetra condimentum. Praesent varius pulvinar
          ex quis eleifend.
        </p>

        <p className="text-gray-600">
          Ut tincidunt elit ipsum, at finibus nibh feugiat ut. Mauris lacinia
          ligula id aliquam vehicula. Ut sodales velit non leo commodo, sit amet
          commodo elit lobortis.
        </p>
      </div>
    </Section>
  );
}
