import React from 'react';
import { GetBlogs } from 'components/Elements/Blogs/Travel/GetBlog';
import PlaneLogo from '../../components/Elements/SVG/Travel/PlaneLogo';
import { Suspense } from 'react';
const Travel = async (): Promise<JSX.Element> => {
  return (
    // TODO: marginBottom後で消す
    <div style={{ marginTop: '7rem', marginBottom: '70vh' }}>
      <PlaneLogo />
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        <GetBlogs />
      </Suspense>
    </div>
  );
};
export default Travel;
