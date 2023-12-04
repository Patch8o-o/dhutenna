import { css } from '@linaria/core';
import Image from 'next/image';

import Board from "./components/Board";


export default function Home() {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f5f5f5;
      padding-bottom: 5rem;
    `,
    fv: css`
    width: 100%;
      height: 90vh;
      display: grid;
      place-items: center;
    `,
    bodyCopy: css`
      justify-self: self-start;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    `,
    title: css`
      font-size: 4rem;
      font-weight: 800;
      color: #333;
    `,
    subtitle: css`
      font-size: 2rem;
      font-weight: 400;
      color: #666;
    `,
    button: css`
      margin-top: 2rem;
      padding: 1rem 2rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      background-color: #333;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    `,
    boardList: css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 5rem;
      gap: 2rem;
    `,
  };

  return (
    <div className={styles.container}>
      <div className={styles.fv}>
        <div className={styles.bodyCopy}>
          <p>それは、ふと訪れる。</p>
          <p>
            朝遅刻しかけで走る、御茶ノ水の街。<br />
            マックの匂いがする、昼過ぎのエレベーター。<br />
            深夜になると通知が増える、ディスコのアイコン。
          </p>
          <p>何と形容しようか、これが。</p>
          <p>デジハリってんなあ。</p>
        </div>
        <h1 className={styles.title}>
          <Image src='/img/logo_big.png' alt='デジハリってんなあ展' width={600} height={150} />
        </h1>
      </div>
      <div className={styles.boardList}>
        <Board main='hoge' sub='sub' />
        <Board main='hoge' sub='sub' />
        <Board main='hoge' sub='sub' />
        <Board main='hoge' sub='sub' />
      </div>
    </div>
  );
}
