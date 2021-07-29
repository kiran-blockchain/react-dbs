const DropdownOptions =(props)=>{
    return(
        props.list.map((x,index)=>{
            return <option value={x.value}
             key={index}>{x.name}</option>
        })
    )
}

export default DropdownOptions;