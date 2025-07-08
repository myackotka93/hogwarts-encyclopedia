import styles from '@/src/components/Card/Card.module.scss';
import { useRouter } from "next/router";

export type CardType = {
    id: string;
    name: string;
    description: string;
    house: string;
    image: string;
}

type CardProps = {
  character: CardType;
  onClick?: () => void; // 👈 вот это добавь
};

export default function Card({ character, onClick }: CardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/characters/${character.id}`);
  };

  return(
        <div className={styles.cardContainer} onClick={onClick}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image} src={character.image} alt={character.name} />
          <div className={styles.name}>{character.name}</div>
          <div className={styles.house}>{character.house}</div>
          <div className={styles.description}>{character.description}</div>
          <div onClick={handleClick}>Подробнее</div>
        </div>
    )
}