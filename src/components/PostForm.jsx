import React, {useState} from 'react';

// const PostForm = () => {
//     const [title, setTitle] = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault();

//         const newPost = {
//             title,
//             id: Date.now().toString()
//         }

//         console.log(newPost)
//         setTitle('')
//     }
//     const changeInputHandler = (e) => {
//         setTitle(e.target.value)
//     }

//     return (
//         <form onSubmit={submitHandler} >
//             <h1>POST FORM</h1>
//             <div className="form-group">
//                 <label htmlFor="title">Post Title</label>
//                 <input 
//                     value={title}
//                     onChange={changeInputHandler}
//                     type="text" 
//                     className="form-control" 
//                     id="title" 
//                     name={title}
//                     placeholder="Post Title" />
//             </div>
//             <button className="btn btn-success" type="submit">Создать</button>
//         </form>
//     );
// }

// export default PostForm;


export default class PostForm extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
           title: ''
       }
   }

    submitHandler = (e) => {
        e.preventDefault();

        const {title} = this.state;

        const newPost = {
            title,
            id: Date.now().toString()
        }

        console.log(newPost)
        this.setState({title: ''})
        
    }

    changeInputHandler = (e) => {
        e.persist()
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <h1>POST FORM</h1>
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input 
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        type="text" 
                        className="form-control" 
                        id="title" 
                        name="title"
                        placeholder="Post Title" />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        );
    }
}


