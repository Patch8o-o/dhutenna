import { css } from '@linaria/core';

import Board from './components/Board';


export default function Home() {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f5f5f5;
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
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>hello</h1>
      <div>
        <Board main='hoge' sub='sub' />
      </div>
    </div>
  );
}
