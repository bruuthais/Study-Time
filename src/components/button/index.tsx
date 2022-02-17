import React from 'react'

class Button extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button className="button" onClick={onClick} type={type}>{this.props.children}</button>
        )
    }
}

export default Button