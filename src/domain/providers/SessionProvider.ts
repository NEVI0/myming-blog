import { SessionAbstract } from '@domain/entities';

export default interface SessionProviderAbstract {
  session(): Promise<SessionAbstract | null>;
}
