import {
  PostTitleInput,
  PostSubtitleInput,
  PostContentInput,
  PostAuthorNoteInput,
} from '@app/components/common';

export default function Form() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <PostTitleInput />
          <PostSubtitleInput />
        </div>

        <PostContentInput />
      </div>

      <div className="flex justify-end">
        <PostAuthorNoteInput />
      </div>

      <div>Actions</div>
    </section>
  );
}
