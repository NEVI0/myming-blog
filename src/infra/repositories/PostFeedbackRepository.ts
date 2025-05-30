import { FieldValue } from 'firebase-admin/firestore';

import { DatabaseProviderAbstract } from '@domain/providers';
import { PostFeedbackRepositoryAbstract } from '@domain/repositories';

const POST_COLLECTION_NAME = 'posts';

export default class PostFeedbackRepository
  implements PostFeedbackRepositoryAbstract
{
  constructor(private readonly databaseProvider: DatabaseProviderAbstract) {}

  public like: PostFeedbackRepositoryAbstract['like'] = async (postId) => {
    await this.databaseProvider.updateByTransaction(
      POST_COLLECTION_NAME,
      {
        field: 'id',
        operator: '==',
        value: postId,
      },
      {
        'feedback.likes': FieldValue.increment(1),
      }
    );
  };

  public dislike: PostFeedbackRepositoryAbstract['like'] = async (postId) => {
    await this.databaseProvider.updateByTransaction(
      POST_COLLECTION_NAME,
      {
        field: 'id',
        operator: '==',
        value: postId,
      },
      {
        'feedback.dislikes': FieldValue.increment(1),
      }
    );
  };
}
