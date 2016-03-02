import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

//don't use context except in react router..it is in flux

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        //blog post has been created and we navigate back to root path
        this.context.router.push('/');
      });
  }



  render() {
    const { fields: { title, categories, content },handleSubmit } = this.props;
    // same as const title = this.props.fields.title
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
            <div className='text-help'>
              {categories.touched ? categories.error : ''}
            </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <input className="form-control" {...content}/>
            <div className='text-help'>
              {content.touched ? content.error : ''}
            </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a Title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a Category';
  }
  if (!values.content) {
    errors.content = 'Enter some Content';
  }

  return errors;
}

//  connect: first arguemnt is mapSTateToProps 2nd is masDispatchToProps
// reduxForm: first argument is config...then the same as connect

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'], validate
}, null, { createPost })(PostsNew);
//config to redux form to record form as application state
