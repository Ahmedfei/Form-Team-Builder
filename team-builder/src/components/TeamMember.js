import React from 'react'

export default function TeamMember(props) {
    const { formInfo, update, submit } = props


    const onChange = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='form-droup-ontainer' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Username
            <input
                        type='text'
                        value={formInfo.username}
                        placeholder='Username'
                        onChange={onChange}
                        name='username'
                    />
                </label>

                <label>Email
        <input
                        type='text'
                        value={formInfo.email}
                        placeholder='Email'
                        onChange={onChange}
                        name='email'
                    />
                </label>

                <lable>Role
        <select
                        name='role'
                        value={formInfo.role}
                        onChange={onChange}>
                        <option value=''>---Select Your Role</option>
                        <option value='java'>java Developer</option>
                        <option value='python'>Python</option>
                        <option value='javascript'>Javascript Deveolper</option>
                        <option value='backend'>Backend Engineer</option>
                    </select>
                </lable>

                <label>Language
        <input
                        type='text'
                        value={formInfo.language}
                        placeholder='Prefered Language'
                        onChange={onChange}
                        name='language'
                    />
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>

    )
}