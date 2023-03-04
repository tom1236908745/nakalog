import React, { use } from 'react';
import Link from 'next/link';
import { render } from 'react-dom';
import PlaneLogo from '../../components/Elements/SVG/Travel/PlaneLogo';
import { getList } from '../../features/libs/microcms';

const Travel = async (): Promise<JSX.Element> => {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <div style={{ marginTop: '10rem', width: '13rem', height: '13rem' }}>
      <h1>{time}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/travel/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Travel;
