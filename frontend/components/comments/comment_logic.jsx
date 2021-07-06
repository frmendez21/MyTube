import { useState } from 'react';

const CommentLogic = props => {
    const [showEditDel, toggleEditDel] = useState(false);
    const [showOption, toggleOption] = useState(false);
    const [showDel, toggleDel] = useState(false);
    const [showEdit, toggleEdit] = useState(false);
    const [body, setBody] = useState('');

    if(showOption) {
        document.addEventListener('click', e => {
            if((e.target.innerText !== 'Edit' || e.target.innerText !== 'Delete') && e.target.id !== 'menu') {
                toggleOption(false)
            };
        });
    };

    const handleClick = event =>  {
        if(event === 'open') {
            !showOption ? toggleOption(true) : toggleOption(false);
        } else if (event === 'del') {
            toggleOption(false)
            toggleDel(true)
        } else if (event === 'close') {
            toggleDel(false);
            toggleEdit(false);
            toggleOption(false);
        } else if (event === 'delete') {
            props.deleteComment(props.comment);
            toggleDel(false);
        } else if (event === 'edit') {
            let menu = document.getElementById('menu');
            menu.classList.replace('fas', 'hidden');
            toggleEdit(true);
            toggleOption(false);
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
        if(body.length === 0) return null;

        let comment = props.comment; 
        comment.body = body;
        props.updateComment(comment)
            .then(() => handleClick('close'))
    };

    return {handleClick, handleSubmit, showEditDel, showOption, showDel, showEdit, setBody, toggleEditDel};
}

export default CommentLogic;