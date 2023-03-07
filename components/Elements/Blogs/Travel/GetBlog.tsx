import React, { ReactElement } from 'react';
import Link from 'next/link';
import { getList } from 'features/libs/microcms';
import articleListStyle from '@/styles/article/articleListStyle.module.css';
import type { MicroCMSImage } from 'microcms-js-sdk';
import { adjustDate } from '@/features/utils/adjustDate';
export const GetBlogs = (async () => {
  const { contents } = await getList();
  const handleUrl = (url: MicroCMSImage | undefined) => {
    if (url) return url.url;
    return '';
  };
  return (
    <div className={articleListStyle.contentWrapperStyle}>
      {contents.map((post) => {
        return (
          <div key={post.id}>
            <Link
              href={`/travel/${post.id}`}
              className={articleListStyle.contentStyle}
            >
              <img
                src={handleUrl(post.eyecatch)}
                className={articleListStyle.eyeCatchStyle}
              />
              <div className={articleListStyle.describeWrapperStyle}>
                <div className={articleListStyle.titleStyle}>{post.title}</div>
                <div className={articleListStyle.dateStyle}>
                  {adjustDate(post.publishedAt)}
                </div>
              </div>
            </Link>
            <div className={articleListStyle.articleBorderStyle}></div>
          </div>
        );
      })}
    </div>
  );
}) as unknown as React.FC;
