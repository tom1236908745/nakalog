import React, { ReactElement } from 'react';
import Link from 'next/link';
import { getList } from 'features/libs/microcms';
export const GetBlogs = (async () => {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  //   if (!contents || contents.length === 0) {
  //     return <h1>No contents</h1>;
  //   }
  return (
    <div style={{ width: '13rem', height: '13rem', margin: '0 auto' }}>
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
}) as unknown as React.FC;
