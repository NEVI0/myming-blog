export default function Content() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Título do post</h1>
        <h2 className="text-xl font-bold text-gray-600">Subtítulo do post</h2>
      </div>

      <div className="flex flex-col gap-4 w-full h-fit">
        <p className="w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          justo enim, pretium sit amet laoreet nec, gravida at justo. Cras
          fermentum lacinia justo vitae pellentesque. Morbi nulla dui,
          ullamcorper non posuere quis, molestie a magna. Ut ac condimentum
          orci. Nulla sodales id neque at imperdiet. Sed sodales, metus sed
          volutpat pellentesque, libero dolor iaculis nisl, ac malesuada urna
          diam non neque. Maecenas iaculis, nunc nec molestie auctor, mi sapien
          vestibulum felis, ac vehicula purus mauris non dolor.
          <br />
          <br />
          Quisque ac quam feugiat, iaculis lacus non, rutrum ligula. Sed
          tincidunt laoreet velit ac mollis. Sed luctus erat eu viverra
          tristique. Aliquam fermentum pellentesque bibendum. Sed egestas non
          elit in lacinia. Maecenas aliquet lectus tortor, non efficitur lorem
          accumsan quis. Phasellus varius consequat lorem. Nam sit amet ante mi.
          Aliquam erat volutpat. Curabitur arcu nunc, gravida non lectus id,
          lobortis porttitor augue. Donec nisl enim, ultricies quis nunc eu,
          feugiat consectetur nibh.
          <br />
          <br />
          Sed iaculis congue orci vel tempus. Nunc in mollis odio, et porttitor
          felis. In non ipsum id eros dapibus convallis eu id eros. Integer ac
          ultricies ipsum. Donec laoreet turpis tincidunt erat viverra
          efficitur. Fusce hendrerit mauris eleifend dolor dignissim, a mattis
          nisl mattis. Nam sagittis ligula lacus, ac consequat augue mattis
          eget. Donec non dui sed nisi blandit porta. Proin eu purus purus.
          Curabitur sem quam, varius vel tellus ut, posuere tempus dolor.
          <br />
          <br />
          Nulla egestas suscipit tortor, eget vestibulum mauris aliquet vel.
          Nulla facilisi. Proin ut tempor ex. Mauris vitae ligula nec orci
          scelerisque suscipit scelerisque in eros. Pellentesque ut libero et
          dui laoreet lobortis. Morbi mollis ex elit, eu posuere velit commodo
          et. Mauris tortor nulla, fringilla sit amet imperdiet sit amet,
          fringilla quis nulla. Suspendisse potenti. Nunc ultrices odio nulla.
          Maecenas aliquam bibendum lectus eget feugiat. Vivamus a viverra nisi.
          Aenean dictum, justo et condimentum consectetur, arcu elit accumsan
          turpis, quis iaculis leo elit id nibh.
        </p>
      </div>

      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center justify-between">
        <div className="w-full flex flex-col">
          <p className="text-sm text-gray-600 text-center md:text-left">
            Por Névio Costa Magagnin
          </p>

          <small className="text-xs text-gray-600 text-center md:text-left">
            Em 01/01/2000 às 00:00
          </small>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-4 w-full">
          <i className="bx bxs-quote-alt-left text-xl text-gray-400"></i>

          <span className="italic text-gray-600">
            Está é a minha nota como autor do post
          </span>

          <i className="bx bxs-quote-alt-right text-xl text-gray-400"></i>
        </div>
      </div>
    </section>
  );
}
