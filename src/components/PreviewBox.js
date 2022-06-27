import React from 'react';
import Toolbar from './Toolbar';
import MarkdownPreview from '@uiw/react-markdown-preview';

class PreviewBox extends React.Component {
    render() {
        return (
            <div className={this.props.class[1]}>
                <Toolbar title='Previewer' iconLeft='fa-brands fa-readme' iconRight={this.props.class[2]} onClick={this.props.onExpand} />
                <div id='preview' className='preview'>
                    <MarkdownPreview source={this.props.content} />
                </div>
            </div>
        );
    }
}

export default PreviewBox