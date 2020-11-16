import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

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


class PostForm extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
           title: ''
       }
   }

    submitHandler = (e) => {
        e.preventDefault();

        const {title} = this.state;

        if (!title.trim()) {
           return this.props.showAlert('Введите название!');
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost)

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
            <form onSubmit={this.submitHandler} className="mb-5" >
                <h1 className="mb-3">POST FORM</h1>
                { this.props.alert && <Alert text={this.props.alert} /> }
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input 
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        type="text" 
                        className="form-control" 
                        id="title" 
                        name="title"
                        placeholder="Спам слова(fuck, spam, php)" />
                </div>
                <button
                    className="btn btn-success" 
                    type="submit"
                >Создать</button>

            </form>
        );
    }
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

const mapDispatchToProps = {
    createPost,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)