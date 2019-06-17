import { connect } from 'react-redux';
import { sampleAction } from '../store/actions/sample.actions';

const SampleComponent = () => {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    testSampleAction: dispatch(sampleAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
