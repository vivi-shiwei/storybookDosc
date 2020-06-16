import React from 'react';
import PropTypes from 'prop-types';
const Test = (props)=><div>{props.children}</div>
Test.defaultProps = {
  text: '默认值',
  onDelete: () => {}
};
Test.propTypes = {
   /** 这里text是注释 */
  text: PropTypes.string.isRequired,
  /** 这里onDelete是注释 */
  onDelete: PropTypes.func,
}
export default Test
