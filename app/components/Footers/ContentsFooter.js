import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import FavoriteButton from 'components/Buttons/FavoriteButton';
import ReplyButton from 'components/Buttons/ReplyButton';
import ShareButton from 'components/Buttons/ShareButton';
import ExpandMoreButton from 'components/Buttons/ExpandMoreButton';

const styles = (theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    padding: '3em 0',
    borderTop: '1px solid #666'
  }
});

const ContentsFooter = () => (
  <footer>

    <FavoriteButton />
    <ReplyButton />
    <ShareButton />
    <ExpandMoreButton />
  </footer>
);

export default withStyles(styles)(ContentsFooter);
