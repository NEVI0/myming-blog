import { useAuth } from '@configs/auth';
import { UserAbstract } from '@domain/entities';

import { VerticalDivider } from '@app/components/ui';
import { DeleteAccountButton, SignOutButton } from './components';

interface UserProps {
  user: Omit<UserAbstract, 'toJson'>;
}

export default async function User({ user }: UserProps) {
  const session = await useAuth();
  const isOwner = session?.user?.id === user.id;

  return (
    <section className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img
          src={user.image}
          alt={`Imagem de perfil de ${user.name}`}
          className="size-20 rounded-full"
        />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-center md:text-left">
            {user.name}
          </h1>
          <h2 className="text-xl font-bold text-center md:text-left text-gray-600">
            {user.email}
          </h2>
        </div>
      </div>

      <aside className="flex items-center justify-center gap-4">
        {isOwner && (
          <>
            <DeleteAccountButton />
            <VerticalDivider />
            <SignOutButton />
          </>
        )}
      </aside>
    </section>
  );
}
