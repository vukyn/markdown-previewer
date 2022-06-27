import React from 'react';
import Toolbar from './Toolbar';

class EditorBox extends React.Component {
    render() {
        return (
            <div className={this.props.class[0]}>
                <Toolbar title='Editor' iconLeft='fa-solid fa-pencil' iconRight={this.props.class[2]} onClick={this.props.onExpand} />
                <textarea id='editor' typeof='text' value={this.props.content} onChange={this.props.onChange} />
            </div>
        );
    }
}

export default EditorBox;
