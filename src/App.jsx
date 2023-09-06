import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({
    title: '',
    surname: '',
    description: '',
    length: '',
    read: false
  })

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      return setValues({
        ...values,
        [name]: checked
      })
    }

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={values.title} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input id="surname" name="surname" value={values.surname} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={values.description} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <select name="length" id="length" value={values.length} onChange={onChange}>
            <option disabled value="">Select option</option>
            <option value="short">Short</option>
            <option value="long">Long</option>
          </select>
        </div>
        <div>
          <input name="read" id="read" type="checkbox" checked={values.read} onChange={onChange} />
          <label htmlFor="read">I have read terms and conditions xD</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
