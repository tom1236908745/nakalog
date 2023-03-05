import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '../../../features/libs/microcms';
import articleStyle from '@/styles/article/articleStyle.module.css';

export default async function TravelDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }
  const adjustData = (data: string | undefined) => {
    if (!data) return;
    data = data.substring(0, data.indexOf('T'));
    let time: string[] = data.split('-');
    if (time[1][0] === '0') time[1] = time[1][1];
    if (time[2][0] === '0') time[2] = time[2][1];
    console.log('time ' + time);
    data = time[0] + '/' + time[1] + '/' + time[2];
    return data;
  };
  return (
    <div style={{ marginTop: '13rem' }}>
      <article className={articleStyle.articleWrapper}>
        <h2 style={{ fontSize: '2.7rem', marginBottom: '2rem' }}>
          {post.title}
        </h2>
        <p style={{ fontSize: '1rem', color: '#707070' }}>
          {adjustData(post.publishedAt)}
        </p>
        <div className={articleStyle.bodyWrapper}>{parse(post.body)}</div>
      </article>
    </div>
  );
}
