import React from 'react';
import { GetBlogs } from 'components/Elements/Blogs/Travel/GetBlog';
import { PlaneLogo } from '../../components/Elements/SVG/Travel/PlaneLogo';
import { Suspense } from 'react';
import articleListStyle from '@/styles/article/articleListStyle.module.css';
const Travel = async (): Promise<JSX.Element> => {
  return (
    // TODO: marginBottom後で消す
    <div className={articleListStyle.categoryWrapperStyle}>
      <PlaneLogo />
      <div className={articleListStyle.imageBorderStyle}></div>
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        <GetBlogs />
      </Suspense>
    </div>
  );
};
export default Travel;
