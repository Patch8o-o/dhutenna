import { css } from '@linaria/core';
import Image from 'next/image';


type BoardProps = {
  main: string
  sub: string
}

const Board = ({ main, sub }: BoardProps) => {
  const styles = {
    container: css`
      position: relative;
      padding: 10rem 15rem;
      text-align: center;
      border: 1px solid #595959;
      font-family: 'nimbus-sans', sans-serif;
      font-weight: 400;
      font-style: normal;
    `,
    mainCopy: css`
      font-size: 4rem;
      font-weight: 800;
      color: #595959;
    `,
    subCopy: css`
      font-size: 2rem;
      font-weight: 400;
      color: #595959;
      opacity: 0.8;
    `,
    logoImage: css`
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
    `,
  };
  return (
    <div className={styles.container}>
      <p className={styles.mainCopy}>{main}</p>
      <span className={styles.subCopy}>{sub}</span>
      <Image src='/img/logo.png' alt='' width={100} height={30} className={styles.logoImage} />
    </div>
  );
};

export default Board;
