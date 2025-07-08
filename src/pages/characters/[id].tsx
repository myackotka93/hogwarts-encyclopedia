import { useRouter } from 'next/router';
import { characters } from '@/src/data/characters';
import { CardType } from '@/src/components/Card/Card';
import styles from '@/src/pages/characters/Characrer.module.scss'

export default function CharacterPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== 'string') {
    return <div>Загрузка...</div>;
  }

  const character: CardType | undefined = characters.find((c) => c.id === id);

  if (!character) return <div>Страница в разработке</div>;

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.image} src={character.image} alt={character.name}/>
      <div className={styles.name}>{character.name}</div>
      <div className={styles.description}>{character.description}</div>
    </div>
  )
}
