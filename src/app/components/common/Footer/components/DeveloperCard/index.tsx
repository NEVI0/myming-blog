export default function DeveloperCard() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-3">
      <img
        src="/nevio.png"
        alt="Névio Costa Magagnin"
        className="w-14 h-14 rounded-full"
      />

      <div className="flex flex-col">
        <p className="text-sm font-medium text-center md:text-left">
          Criado por Névio Costa Magagnin
        </p>

        <small className="text-sm text-center md:text-left text-gray-500">
          Engenheiro de Software & UI/UX Designer
        </small>
      </div>
    </div>
  );
}
