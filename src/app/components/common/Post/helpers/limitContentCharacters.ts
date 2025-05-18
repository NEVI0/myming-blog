export default function limitContentCharacters(content: string) {
  return content.substring(0, 150) + '...';
}
