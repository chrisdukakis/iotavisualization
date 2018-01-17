import {Tangle} from '../components/Tangle';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => state;
const mapDispatchToProps = (dispatch, ownProps) => ({});

const TangleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tangle);

export default TangleContainer;
