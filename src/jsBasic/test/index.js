import React from 'react';
import data from '../../Api/data';
import Components from './components';
function Index() {
    // const handleClick = (itemData) => {
    //     console.log(itemData.name)
    // }
    const Form = {
        Input() {
            return (
                <input />
            )
        },
        Checkbox() {
            return (
                <input type='checkbox' />
            )
        }
    }

    const type = 'Checkbox';
    const Component = Form[type];
    return (
        <div className='main'>
            {/* {data.map((item) => (
                <Components
                    key={item.id}
                    itemData={item}
                    onClick={handleClick}
                />
            ))} */}

            {/* <Form.Checkbox /> */}
            <Component />
        </div>
    );
}

export default Index;