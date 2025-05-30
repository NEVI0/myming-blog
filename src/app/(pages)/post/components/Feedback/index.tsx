'use client';

import { useState } from 'react';

import { PostAbstract } from '@domain/entities';
import { givePostFeedbackAction } from '@app/actions';

import { VerticalDivider } from '@app/components/ui';
import { concatClasses } from '@app/helpers';

type FeedbackType = 'likes' | 'dislikes';

interface FeedbackProps {
  post: Omit<PostAbstract, 'toJson'>;
}

export default function Feedback({ post }: FeedbackProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feedbackGiven, setFeedbackGiven] = useState<FeedbackType | null>(null);

  async function handleGiveFeedback(type: FeedbackType) {
    try {
      setIsLoading(true);

      const updated = await givePostFeedbackAction({
        postId: post.id,
        feedback: type,
      });
      if (!updated.success) throw Error('Não foi possível dar um feedback...');

      setFeedbackGiven(type);
    } catch (error) {
      setFeedbackGiven(null);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="flex items-center justify-center">
      <button
        onClick={() => handleGiveFeedback('dislikes')}
        disabled={isLoading || feedbackGiven === 'dislikes'}
        className={concatClasses(
          'cursor-pointer disabled:cursor-default flex items-center justify-center gap-3 font-medium h-[48px] px-8 hover:text-primary transition-colors',
          feedbackGiven === 'dislikes' && 'text-primary'
        )}
      >
        <i
          className={
            feedbackGiven === 'dislikes' ? 'bx bxs-dislike' : 'bx bx-dislike'
          }
        ></i>
        Não gostei
      </button>

      <VerticalDivider />

      <button
        onClick={() => handleGiveFeedback('likes')}
        disabled={isLoading || feedbackGiven === 'likes'}
        className={concatClasses(
          'cursor-pointer disabled:cursor-default flex items-center justify-center gap-3 font-medium h-[48px] px-8 hover:text-primary transition-colors',
          feedbackGiven === 'likes' && 'text-primary'
        )}
      >
        <i
          className={feedbackGiven === 'likes' ? 'bx bxs-like' : 'bx bx-like'}
        ></i>
        Gostei
      </button>
    </section>
  );
}
