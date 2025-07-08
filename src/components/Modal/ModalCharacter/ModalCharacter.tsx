import { CardType } from '@/src/components/Card/Card';
import styles from './ModalCharacter.module.scss';

type ModalContentProps = {
  character: CardType;
  onClose: () => void;
};

export default function ModalCharacter({ character, onClose }: ModalContentProps) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={character.image} alt={character.name} />
      <h2 className={styles.name}>{character.name}</h2>
      <p>{character.description}</p>
      <p><strong>Факультет:</strong> {character.house}</p>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}