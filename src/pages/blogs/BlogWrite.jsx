import React, { useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'quill/dist/quill.snow.css';

const BlogWrite = () => {

  const [editorContent, setEditorContent] = useState('');

    const handleChange = (value) => {
      setEditorContent(value);
    };
  
    const handleSave = () => {
      console.log('Blog content saved:', editorContent);
    };


  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],  
      ['link'],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['clean'],  
      ['image'], 
    ],
  };

  return (
    <div>
      <ReactQuill onChange={handleChange} modules={modules}  formats={[
          'header', 'font', 'bold', 'italic', 'underline', 'list', 'bullet', 'link', 'image', 'blockquote', 'code-block', 'align'
        ]} className='p-16' theme='snow' />


<button onClick={handleSave}>Save Blog</button>

    </div>
  )
}

export default BlogWrite
