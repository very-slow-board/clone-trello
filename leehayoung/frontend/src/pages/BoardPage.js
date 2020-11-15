import React from 'react';
import PageTemplate from 'components/common/PageTemplate';

const BoardPage = ({match}) => {
  return (
    <PageTemplate>
      Board, {match.params.id}
    </PageTemplate>
  );
};

export default BoardPage;