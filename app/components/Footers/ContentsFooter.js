import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import FavoriteButton from 'components/Buttons/FavoriteButton';
import ReplyButton from 'components/Buttons/ReplyButton';
import ShareButton from 'components/Buttons/ShareButton';
import DollarCountButton from 'components/Buttons/DollarCountButton';

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
    <DollarCountButton />
  </footer>
);

export default withStyles(styles)(ContentsFooter);
