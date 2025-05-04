import Link from 'next/link';

interface PostProps {}

export default function Post({}: PostProps) {
  return (
    <Link href="/">
      <div className="flex flex-col justify-between gap-4 p-6 h-[168px] w-full rounded-3xl overflow-hidden bg-gray-100 hover:bg-gray-200 transition-colors">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium">Titulo do post</h3>

          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vulputate tristique massa, in lacinia purus vehicula id. Etiam porta
            rhoncus massa id suscipit...
          </p>
        </div>

        <div className="flex items-center justify-between">
          <small className="text-sm text-gray-600">Por Nome do Autor</small>
          <small className="text-sm text-gray-600">24 curtidas</small>
        </div>
      </div>
    </Link>
  );
}
