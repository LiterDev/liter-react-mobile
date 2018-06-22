/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import GridSquareBoxSection from 'components/Sections/GridSquareBox';

// import GridLayout from 'react-grid-layout';
import RGL, { Responsive, WidthProvider } from 'react-grid-layout';
// const ResponsiveGridLayout = WidthProvider(Responsive);
const ResponsiveGridLayout = WidthProvider(RGL);
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: 200
  },
  helpMenu: {
    display: 'flex',
    justifyContent: 'space-between'
  },
});
const tileData = [
  {
    title: '일상',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '좋아요',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '맞팔',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '흔남',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '훈녀',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: 'L4l',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: 'sicence',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '공팔리터',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '짱짱맨',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '이더리움',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '올라라코인',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  },
  {
    title: '가즈아아아아아ㅏㅏ',
    imageUrl:
      'https://pbs.twimg.com/profile_images/2881057137/530477f8fb28a3e033f89ecebe2be166.jpeg',
    cols: 1
  }
];

class WelcomeSetFavorite extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      passwordConfirm: '',
      mail: '',

      selectedFile: null
    };
    this.myRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { classes, history, location, auth } = this.props;
    const node = this.myRef.current;
    // console.log('this.refs.wowow', this.ref.wowow)
    return (
      <div>
        <Helmet titleTemplate="%s - Login" defaultTitle="title">
          <meta name="description" content="LoginPage" />
        </Helmet>
        <Typography variant="title" gutterBottom align={'center'}>
          LITER에 오신 것을 환영합니다.
        </Typography>
        <Typography variant="subheading" gutterBottom align={'center'}>
          관심사 5개 이상 선택하세요.
        </Typography>
        {/*className={classes.demo}*/}
        <GridSquareBoxSection tileData={tileData} />
      </div>
    );
  }
}

WelcomeSetFavorite.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onSubmitLogin: PropTypes.func,
  user: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default withStyles(styles)(WelcomeSetFavorite);
