import PropTypes from 'prop-types';

const ButtonComponent = ({onClick, children, type}) => {

  return (
    <div>
       <button type={type} onClick={onClick}>

        {children}
       </button>
    </div>
  )
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default ButtonComponent


