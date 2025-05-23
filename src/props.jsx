import PropTypes from 'prop-types'

function Props(props) {

    return (
        <>
            <p>Prop message: {props.prop}</p>
        </>
    )
}

Props.propTypes = {
    prop: PropTypes.string
}

Props.defaultProps = {
    prop: 'No-message'
}

export default Props