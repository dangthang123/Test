import React, { useContext } from 'react';
import { ThemeContext } from './ThemContext'
import '../../App.css';
function ContentContext() {
    const context = useContext(ThemeContext);
    // console.log(context);
    return (
        <div>
            <h1 className={context.theme}>abcacsacsacsacascasc</h1>

        </div>
    );
}

export default ContentContext;