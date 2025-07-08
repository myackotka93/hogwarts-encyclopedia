import styles from "@/src/assets/styles/page.module.css";
import  Card  from '@/src/components/Card/Card';
import { characters } from '@/src/data/characters';
import { CardType } from "@/src/components/Card/Card";
import { useState } from "react";
import ModalCharacter from "@/src/components/Modal/ModalCharacter/ModalCharacter";
import ModalLayout from "@/src/components/Modal/ModalLayout/ModalLayout";

export default function Home() {
  const [selected, setSelected] = useState<CardType | null>(null);

  return (
    <div className={styles.page}>
      <div className={styles.cardsContainer}>
        {characters.map((character: CardType) => (
          <Card
            key={character.id}
            character={character}
            onClick={() => setSelected(character)}></Card>
        ))}

        {selected && (
          <ModalLayout onClose={() => setSelected(null)}>
            <ModalCharacter character={selected} onClose={() => setSelected(null)} />
          </ModalLayout>
        )}
      </div>
    </div>
  );
}
