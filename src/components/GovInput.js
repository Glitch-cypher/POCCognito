export default function Input({id,type, value,handleChange,name}){
    return <input
          className="govuk-input govuk-!-width-one-quarter"
          id= {id}
          type={type}
          placeholder={id}
          value={value}
          onChange={handleChange}
          name={name}
        />
}