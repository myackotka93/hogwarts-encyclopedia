import { ReactNode } from 'react';
import styles from './ModalLayout.module.scss';

type ModalLayoutProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function ModalLayout({ children, onClose }: ModalLayoutProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}