import PropTypes from 'prop-types';

const Toolbar = (props) => {
    return (
        <div className='toolbar'>
            <i class={props.iconLeft}></i>
            <span>{props.title}</span>
            <i class={props.iconRight} onClick={props.onClick}></i>
        </div>
    );
}

Toolbar.propTypes = {
    title: PropTypes.string,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string
}

Toolbar.defaultProps = {
    iconRight: 'fa-solid fa-xmark',
    onClick: () => null,
}

export default Toolbar;