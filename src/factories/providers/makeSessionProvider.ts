import 'server-only';

import { SessionProviderAbstract } from '@domain/providers';
import { NextAuthSessionProvider } from '@infra/providers';

let instance: SessionProviderAbstract | null = null;

export default function makeSessionProvider() {
  if (!instance) {
    instance = new NextAuthSessionProvider();
  }

  return instance;
}
