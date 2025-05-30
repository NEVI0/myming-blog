import { PostFeedbackRepository } from '@infra/repositories';
import { makeDatabaseProvider } from '@factories/providers';

let instance: PostFeedbackRepository | null = null;

export default function makePostFeedbackRepository() {
  if (!instance) {
    const databaseProvider = makeDatabaseProvider();
    instance = new PostFeedbackRepository(databaseProvider);
  }

  return instance;
}
