import React from 'react';
import Input from './input';


function Testjs() {
    // const posts = [
    //     { id: 1, title: 'Title 1' },
    //     { id: 2, title: 'Title 2' }
    // ];
    // const title = posts.find(p => p.id === 1).title;
    // console.log(title);

    // const integers = [1, 2, 3, 4, 6, 7];
    // const evenIntegers = integers.filter(i => i % 2 === 0);
    // console.log(evenIntegers);const myId = 6;

    // const myId = 6;
    // const userIds = [1, 5, 7, 3, 6];
    // const allButMe = userIds.filter(id => id !== myId);
    // console.log(allButMe);

    // const user = { name: 'Shivek Khurana' };
    // const updatedUser = { ...user, age: 23 };
    // console.log(updatedUser);


    return (
        <div>
            <Input
                label='name'
                type='text'
                placeholder='...abc'
            />
            <Input
                label='name'
                type='text'
                placeholder='...abc'
            />
        </div>
    );
}

export default Testjs;